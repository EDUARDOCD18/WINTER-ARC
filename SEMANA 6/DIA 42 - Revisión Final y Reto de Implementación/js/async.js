/**
 * async.js
 * Simulación de servicios de datos asíncronos (API Mock).
 */

// 1. Simulación de carga de productos desde una base de datos
export const cargarProductosAPI = () => {
    return new Promise((resolve) => {
        console.log("📡 [API] Solicitando catálogo de productos...");
        
        setTimeout(() => {
            const productos = [
                { id: 101, nombre: "Libro de JavaScript Profesional", precio: 45.99 },
                { id: 102, nombre: "Teclado Mecánico RGB", precio: 85.00 },
                { id: 103, nombre: "Mouse Pad XL", precio: 25.50 },
                { id: 104, nombre: "Curso de Inmersión Funcional", precio: 59.99 }
            ];
            resolve(productos);
        }, 1500); // Simula un retraso de 1.5 segundos
    });
};

// 2. Simulación de carga de preferencias del usuario
export const cargarPreferenciasAPI = () => {
    return new Promise((resolve, reject) => {
        console.log("📡 [API] Cargando configuración de usuario...");

        setTimeout(() => {
            const pref = {
                moneda: "USD",
                idioma: "es",
                tema: "oscuro",
                cuponActivo: true
            };
            
            // Simulación opcional de error (descomentar para probar el catch de Promise.all)
            // reject("Error 500: No se pudo conectar con el servicio de perfiles.");
            
            resolve(pref);
        }, 1000); // Simula un retraso de 1 segundo
    });
};

// 3. Función para registrar logs de errores en un "servidor" externo
export const registrarErrorLog = async (error) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.warn(`⚠️ [Log Server] Error registrado: ${error}`);
            resolve(true);
        }, 500);
    });
};