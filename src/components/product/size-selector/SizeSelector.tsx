import type { Size } from '@/interfaces';
import clsx from 'clsx';

interface Props {
    selectorSize: Size;
    availableSizes: Size[];
}


export const SizeSelector = ({ selectorSize, availableSizes }: Props) => {
    return (
        <div className='my-5'>
            <h3 className='font-bold mb-4'>
                Talles disponibles
            </h3>

            <div className='flex'>

                {
                    availableSizes.map(size => (
                        <button
                            key={size}
                            className={
                                clsx(
                                    "mx-2 hover:underline text-lg",
                                    {
                                        'underline': size === selectorSize
                                    }
                                )
                            }
                        >
                            {size}
                        </button>
                    ))
                }

            </div>

        </div>
    )
}