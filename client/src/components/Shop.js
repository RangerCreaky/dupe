import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card';
import Paginate from './Paginate.js';
// import { cards } from '../utils/cards';
import { getAllProducts } from '../slices/shopSlice';

const Shop = () => {
    const products = useSelector(state => state?.shop?.products);
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts({ page: 1, limit: 6 }));
    }, [dispatch])
    const renderCards = () => {
        return products?.data?.map(card => {
            return <Card key={card?._id} id={card?._id} src={card?.thumbnail} name={card?.name} category={card?.category} price={card?.price} shopCard={true} />
        })
    }

    return (
        // <div class="bg-[#fffff4]">
        <div class="bg-white">
            <div>

                {open && <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">

                    <div class="fixed inset-0 bg-black bg-opacity-25"></div>

                    <div class="fixed inset-0 z-40 flex">

                        <div class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div class="flex items-center justify-between px-4">
                                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <span class="sr-only">Close menu</span>
                                    <svg onClick={() => setOpen(false)} class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>


                            <form class="m-8">
                                <h3 class="sr-only">Categories</h3>
                                <ul class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    <li>
                                        <a href="/">Necklace</a>
                                    </li>

                                    <li>
                                        <a href="/">Haaram</a>
                                    </li>

                                    <li>
                                        <a href="/">Ear rings</a>
                                    </li>

                                    <li>
                                        <a href="/">Vaddanam</a>
                                    </li>

                                    <li>
                                        <a href="/">Rings</a>
                                    </li>
                                </ul>



                                <div class="border-b border-gray-200 py-6">
                                    <h3 class="-my-3 flow-root">
                                        <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span class="font-medium text-gray-900">Metal</span>
                                            <span class="ml-6 flex items-center">

                                                <svg class="h-5 w-5 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    <div class="pt-6" id="filter-section-2">
                                        <div class="space-y-4">
                                            <div class="flex items-center">
                                                <input id="filter-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-0" class="ml-3 text-sm text-gray-600">Silver</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-1" class="ml-3 text-sm text-gray-600">Alloy</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-2" class="ml-3 text-sm text-gray-600">Stone</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-3" class="ml-3 text-sm text-gray-600">Gold</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-4" class="ml-3 text-sm text-gray-600">Pearl</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-gray-200 py-6">
                                    <h3 class="-my-3 flow-root">
                                        <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span class="font-medium text-gray-900">Stone</span>
                                            <span class="ml-6 flex items-center">

                                                <svg class="h-5 w-5 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    <div class="pt-6" id="filter-section-2">
                                        <div class="space-y-4">
                                            <div class="flex items-center">
                                                <input id="filter-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-0" class="ml-3 text-sm text-gray-600">Cz</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-1" class="ml-3 text-sm text-gray-600">Emrald</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-2" class="ml-3 text-sm text-gray-600">Stone</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-3" class="ml-3 text-sm text-gray-600">Pearl</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-4" class="ml-3 text-sm text-gray-600">Green Onex</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}

                <main class="mx-auto max-w-7xl px-4">
                    <div class="flex items-baseline justify-between border-b border-gray-200 pt-32 pb-6">
                        <h1 class="text-4xl font-bold tracking-tight text-gray-900"> Shop Now </h1>
                    </div>

                    <section aria-labelledby="products-heading" class="pt-6 pb-24">
                        <h2 id="products-heading" class="sr-only">Products</h2>

                        <div class="flex justify-center">
                            <form class="hidden sm:block w-1/5">
                                <h3 class="sr-only">Categories</h3>
                                <ul class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    <li>
                                        <a href="/">Necklace</a>
                                    </li>

                                    <li>
                                        <a href="/">Haaram</a>
                                    </li>

                                    <li>
                                        <a href="/">Ear rings</a>
                                    </li>

                                    <li>
                                        <a href="/">Vaddanam</a>
                                    </li>

                                    <li>
                                        <a href="/">Rings</a>
                                    </li>
                                </ul>



                                <div class="border-b border-gray-200 py-6">
                                    <h3 class="-my-3 flow-root">
                                        <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span class="font-medium text-gray-900">Metal</span>
                                            <span class="ml-6 flex items-center">

                                                <svg class="h-5 w-5 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    <div class="pt-6" id="filter-section-2">
                                        <div class="space-y-4">
                                            <div class="flex items-center">
                                                <input id="filter-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-0" class="ml-3 text-sm text-gray-600">Silver</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-1" class="ml-3 text-sm text-gray-600">Alloy</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-2" class="ml-3 text-sm text-gray-600">Stone</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-3" class="ml-3 text-sm text-gray-600">Gold</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-4" class="ml-3 text-sm text-gray-600">Pearl</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-gray-200 py-6">
                                    <h3 class="-my-3 flow-root">
                                        <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span class="font-medium text-gray-900">Stone</span>
                                            <span class="ml-6 flex items-center">

                                                <svg class="h-5 w-5 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    <div class="pt-6" id="filter-section-2">
                                        <div class="space-y-4">
                                            <div class="flex items-center">
                                                <input id="filter-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-0" class="ml-3 text-sm text-gray-600">Cz</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-1" class="ml-3 text-sm text-gray-600">Emrald</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-2" class="ml-3 text-sm text-gray-600">Stone</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-3" class="ml-3 text-sm text-gray-600">Pearl</label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="filter-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-size-4" class="ml-3 text-sm text-gray-600">Green Onex</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div class="sm:ml-4 grid lg:grid-cols-3 md:grid-cold-2 justify-center grid-cols-1">
                                {renderCards()}

                                <Paginate next={products?.next} prev={products?.prev} />
                            </div>
                        </div>
                    </section>


                </main>
            </div>
        </div>
    )
}
export default Shop;