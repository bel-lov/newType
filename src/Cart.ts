import Buyable from './Buyable';

export default class Cart {
    items: Buyable[] = []
    add(item:Buyable):void {
        this.items.push(item)
    }
    getAll(): Buyable[] {
        return [...this.items]
    }
    getTotal(): number {
        let total: number = 0;
        this.items.forEach((item) => {
            total += item.price;
        });
        return total;
    }

    getDiscout(discout: number): number {
        let total: number = this.getTotal();
        total = total - total * (discout / 100);
        return total;
    }
    deleteId(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}