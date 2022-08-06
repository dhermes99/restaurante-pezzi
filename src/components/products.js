const products = [
  {
    id: 1,
    name: "Fatia Kinder",
    href: "#",
    price: "R$ 21,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281244_YJ8O_i.jpg",
    imageAlt: "Brownie, brigadeiro gourmet branco, Nutella e Kinder Bueno",
  },
  {
    id: 2,
    name: "Fatia Oreo",
    href: "#",
    price: "R$ 19,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281353_42CG_i.jpg",
    imageAlt: "Brownie, brigadeiro gourmet branco, Nutella e mini Oreo",
  },
  {
    id: 3,
    name: "Fatia Stikadinho",
    href: "#",
    price: "R$ 21,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281354_RTQH_i.jpg",
    imageAlt: "Brownie, brigadeiro gourmet preto, Nutella e Stikadinho",
  },
  {
    id: 4,
    name: "Fatia Ninho com Nutella",
    href: "#",
    price: "R$ 22,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281352_AWMX_i.jpg",
    imageAlt:
      "Brownie, brigadeiro gourmet de leite Ninho, Nutella e 4 docinhos gourmet de Ninho com Nutella.",
  },
  {
    id: 5,
    name: "Fatia Duo",
    href: "#",
    price: "R$ 17,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281241_QP5O_i.jpg",
    imageAlt:
      "Brownie, brigadeiro gourmet preto, brigadeiro gourmet branco e confeitos nobres 100% chocolate.",
  },
  {
    id: 6,
    name: "Fatia Ferrero Rocher",
    href: "#",
    price: "R$ 21,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281242_I5OM_i.jpg",
    imageAlt:
      "Brownie, brigadeiro gourmet preto, Nutella, castanhas e Ferrero Rocher.",
  },
  {
    id: 7,
    name: "Fatia M&M's",
    href: "#",
    price: "R$ 21,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281245_0K6U_i.jpg",
    imageAlt: "Brownie, brigadeiro gourmet preto, Nutella e M&M's.",
  },
  {
    id: 8,
    name: "Fatia de Morango",
    href: "#",
    price: "R$ 22,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281246_21AU_i.jpg",
    imageAlt:
      "Brownie, brigadeiro gourmet de leite Ninho, Nutella e 4 docinhos gourmet de Ninho com Nutella.",
  },
  {
    id: 9,
    name: "Bombom de Oreo",
    href: "#",
    price: "R$ 9,00",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202103131322_EiZ3_p.jpg",
    imageAlt:
      "Casca de chocolate Blend com recheio de brigadeiro branco e Oreo",
  },
  {
    id: 10,
    name: "Fatia Ninho com Nutella",
    href: "#",
    price: "R$ 22,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281352_AWMX_i.jpg",
    imageAlt:
      "Brownie, brigadeiro gourmet de leite Ninho, Nutella e 4 docinhos gourmet de Ninho com Nutella.",
  },
  {
    id: 11,
    name: "Fatia Ninho com Nutella",
    href: "#",
    price: "R$ 22,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281352_AWMX_i.jpg",
    imageAlt:
      "Brownie, brigadeiro gourmet de leite Ninho, Nutella e 4 docinhos gourmet de Ninho com Nutella.",
  },
  {
    id: 12,
    name: "Fatia Ninho com Nutella",
    href: "#",
    price: "R$ 22,90",
    imageSrc:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/0bf25b7d-dc15-4c85-a5e3-fb08ebf2367f/202201281352_AWMX_i.jpg",
    imageAlt:
      "Brownie, brigadeiro gourmet de leite Ninho, Nutella e 4 docinhos gourmet de Ninho com Nutella.",
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Produtos</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
