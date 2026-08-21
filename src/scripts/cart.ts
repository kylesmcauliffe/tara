export type CartItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  qty: number;
  imageKey: string;
};

const STORAGE_KEY = "tara-cart";
export const CART_CHANGE_EVENT = "tara:cart-change";
export const CART_OPEN_EVENT = "tara:cart-open";

function canUseStorage() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function getCart(): CartItem[] {
  if (!canUseStorage()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (!canUseStorage()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  document.dispatchEvent(
    new CustomEvent(CART_CHANGE_EVENT, { detail: { items } }),
  );
}

export function getCartCount(items = getCart()) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function getCartTotal(items = getCart()) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function addToCart(item: Omit<CartItem, "qty"> & { qty?: number }) {
  const cart = getCart();
  const qty = item.qty ?? 1;
  const existing = cart.find(
    (c) => c.slug === item.slug && c.size === item.size,
  );
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      slug: item.slug,
      name: item.name,
      price: item.price,
      size: item.size,
      qty,
      imageKey: item.imageKey,
    });
  }
  saveCart(cart);
  return cart;
}

export function updateQty(slug: string, size: string, qty: number) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter((c) => !(c.slug === slug && c.size === size));
  } else {
    const item = cart.find((c) => c.slug === slug && c.size === size);
    if (item) item.qty = qty;
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(slug: string, size: string) {
  const cart = getCart().filter((c) => !(c.slug === slug && c.size === size));
  saveCart(cart);
  return cart;
}

export function clearCart() {
  saveCart([]);
}

export function onCartChange(cb: (items: CartItem[]) => void) {
  const handler = (e: Event) => {
    const detail = (e as CustomEvent<{ items: CartItem[] }>).detail;
    cb(detail?.items ?? getCart());
  };
  document.addEventListener(CART_CHANGE_EVENT, handler);
  return () => document.removeEventListener(CART_CHANGE_EVENT, handler);
}

export function openCart() {
  document.dispatchEvent(new CustomEvent(CART_OPEN_EVENT));
}
