import { writable } from 'svelte/store';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

function createCartStore() {
    const { subscribe, set, update } = writable<CartItem[]>([]);

    return {
        subscribe,
        addItem: (item: Omit<CartItem, 'quantity'>) => {
            update(items => {
                const existingItem = items.find(i => i.id === item.id);
                if (existingItem) {
                    return items.map(i => 
                        i.id === item.id 
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    );
                }
                return [...items, { ...item, quantity: 1 }];
            });
        },
        removeItem: (id: string) => {
            update(items => items.filter(item => item.id !== id));
        },
        updateQuantity: (id: string, change: number) => {
            update(items => 
                items.map(item => {
                    if (item.id === id) {
                        const newQuantity = Math.max(1, item.quantity + change);
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                })
            );
        },
        clearCart: () => {
            set([]);
        }
    };
}

export const cart = createCartStore(); 