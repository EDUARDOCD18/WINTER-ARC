/**
 * logic.js - Capa de datos y estructuras (Día 49)
 */

// 1. Patrón Singleton para la Configuración
class Config {
    constructor() {
        if (Config.instancia) {
            return Config.instancia;
        }
        this.moneda = "USD";
        this.impuesto = 0.16; // 16% de IVA, por ejemplo
        Config.instancia = this;
    }
}

// 2. CREAR Y EXPORTAR la instancia (Aquí es donde estaba el error)
export const appConfig = new Config();

// 3. EXPORTAR Estructuras de datos avanzadas
export const catalogo = new Map(); // Para búsquedas O(1)
export const wishlist = new Set();  // Para evitar duplicados automáticamente

// 4. Lógica de la Wishlist
export function gestionarWishlist(id) {
    if (wishlist.has(id)) {
        wishlist.delete(id);
        console.log(`🗑️ Producto ${id} eliminado de favoritos.`);
        return false;
    } else {
        wishlist.add(id);
        console.log(`❤️ Producto ${id} añadido a favoritos.`);
        return true;
    }
}