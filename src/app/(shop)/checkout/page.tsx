import Link from "next/link";
import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

export default function () {
    return (
        <div>
            <h1 className="flex justify-center items-center mb-72 px-10 sm:px-0">
                <div className="flex flex-col w-[1000px]">
                    <Title title="Verificar orden" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {/* Carrito */}
                        <div className="flex flex-col mt-5">
                            <span className="text-xl">Verificar carrito</span>
                            <Link href="/cart" className="underline mb-5">
                                Editar carrito
                            </Link>

                            {/* Items del carrito */}
                            {
                                productsInCart.map(product => (
                                    <div key={product.slug} className="flex mb-5">
                                        <Image
                                            src={`/products/${product.images[0]}`}
                                            width={100}
                                            height={100}
                                            style={{
                                                width: '100px',
                                                height: '100px'
                                            }}
                                            alt={product}
                                            className="mr-5 rounded"
                                        />

                                        <div>
                                            <p>{product.title}</p>
                                            <p>${product.price} * 3</p>
                                            <p className="font-bold">Subtotal: ${product.price * 3}</p>

                                            <button className="underline mt-3">
                                                Remover
                                            </button>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* Checkout - Resumen de compra */}
                        <div className="bg-white rounded-xl shadow-xl p-7">

                            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
                            <div className="mb-10">
                                <p className="text xl">Frank Dotcom</p>
                                <p>Teléfono: +5492954215632</p>
                                <p>Calle falsa 123</p>
                                <p>Provincia de nunca jamás</p>
                                <p>CP 123456</p>
                                <p>Argentina</p>
                            </div>

                            {/* Divider */}

                            <div className="w-full h-0.5 rounded bg-gray-200 mb-10">

                            </div>

                            <h2 className="text-2xl mb-2 font-bold">Resumen de compra</h2>

                            <div className="grid grid-cols-2">

                                <span>No, Productos</span>
                                <span className="text-right">3 articulos</span>

                                <span>Subtotal</span>
                                <span className="text-right">$ 100</span>

                                <span>Envio</span>
                                <span className="text-right">$ 100</span>

                                <span className="mt-5 text-2xl">Total:</span>
                                <span className="mt-5 text-2xl text-right">$ 200</span>

                            </div>

                            <div className="mt-5 mb-2 w-full">

                                {/* Disclaimer */}
                                <span className="mb-10">
                                    Al hacer clic en "Comprar" aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#">política de privacidad</a>
                                </span>

                                <Link
                                    className="flex btn-primary justify-center"
                                    href="/orders/123">
                                    Comprar
                                </Link>
                            </div>


                        </div>



                    </div>
                </div>
            </h1>
        </div>
    );
}