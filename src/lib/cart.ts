export type CartItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  qty: number;
  imageKey: string;
};

const STORAGE_KEY = "tara-cart";

type Listener = (items: CartItem[]) => void;
const listeners = new Set<Listener>();

function canUseStorage() {
  return typeof localStorage !== "undefined";
}

function notify(items: CartItem[]) {
  listeners.forEach((cb) => cb(items));
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
  if (canUseStorage()) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
  notify(items);
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
    cart.push({ ...item, qty });
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

export function subscribeCart(cb: Listener) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
