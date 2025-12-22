/**
 * Carrito.js
 * Gestión del estado del carrito siguiendo principios de inmutabilidad.
 */
import { calcularSubtotal } from "./functional.js";

export class Carrito {
    constructor() {
        // Cargamos datos iniciales de forma segura
        this.items = this.cargarDeLocalStorage();
    }

    // 1. Carga inicial (Persistencia)
    cargarDeLocalStorage() {
        const datos = localStorage.getItem("carrito_reto_42");
        return datos ? JSON.parse(datos) : [];
    }

    // 2. Persistencia Inmutable
    guardarEnLocalStorage() {
        localStorage.setItem("carrito_reto_42", JSON.stringify(this.items));
    }

    // 3. AGREGAR PRODUCTO (Enfoque Inmutable)
    agregarProducto(producto, cantidad) {
        const itemExistente = this.items.find(item => item.id === producto.id);

        if (itemExistente) {
            // Si existe, creamos un NUEVO array modificando solo el objeto específico
            // Esto evita mutar el array original directamente
            this.items = this.items.map(item => 
                item.id === producto.id 
                    ? { ...item, cantidad: item.cantidad + cantidad } 
                    : item
            );
        } else {
            // Si no existe, usamos el Operador Spread para crear una COPIA con el nuevo ítem
            this.items = [
                ...this.items, 
                { ...producto, cantidad: cantidad }
            ];
        }
        
        this.guardarEnLocalStorage();
    }

    // 4. ELIMINAR PRODUCTO (Inmutable por naturaleza con .filter)
    eliminarProducto(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.guardarEnLocalStorage();
    }

    // 5. CÁLCULO DEL TOTAL (Usando nuestra función pura)
    obtenerSumaTotal() {
        // Reducimos el array a un solo número sumando los subtotales
        return this.items.reduce((total, item) => {
            return total + calcularSubtotal(item.precio, item.cantidad);
        }, 0);
    }

    // 6. RENDERIZADO (Generación de HTML dinámico)
    renderizar() {
        if (this.items.length === 0) {
            return `<li class="text-muted">El carrito está vacío</li>`;
        }

        return this.items.map(item => `
            <li class="producto-card" data-id="${item.id}">
                <div>
                    <strong>${item.nombre}</strong><br>
                    ${item.cantidad} x $${item.precio.toFixed(2)} 
                    = $${calcularSubtotal(item.precio, item.cantidad).toFixed(2)}
                </div>
                <button class="btn-eliminar" data-id="${item.id}">Eliminar</button>
            </li>
        `).join("");
    }
}