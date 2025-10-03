// En este archivo definimos tipos comunes que pueden ser utilizados en múltiples componentes
// Por ejemplo, una interfaz para los elementos de navegación
export interface NavItem {
    url: string;
    text: string;
}

// Interfaz para las propiedades del componente SEO
export interface SeoProps {
    title: string;
    description: string;
    url: string;
    image: string;
}
