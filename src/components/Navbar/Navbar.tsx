import {Disclosure} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactus from "./Contactus";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Courses', href: '#courses-section', current: false },
    { name: 'Mentors', href: '#mentors-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
    // { name: 'Join', href: '#join-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="bg-secondary navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <div
                                    className="bg-primary text-white font-bold py-2 px-4 rounded block h-30px w-30px lg:hidden"
                                    // src={'/assets/logo/Logo.svg'}
                                    // alt="Courses-Logo"
                                >
                                    Tech<span className='text-secondary'>front.io</span>
                                </div>
                                <div
                                    className="text-3xl font-extrabold text-primary hidden h-48px w-48px lg:block"
                                    // src={'/assets/logo/Logo.svg'}
                                    // alt="Courses-Logo"
                                >
                                    Tech<span className='text-secondary logo-half'>front.io</span>
                                </div>
                            </div>

                            {/* LINKS */}

                            <div className="hidden sm:ml-14 md:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-primary' : 'hover:text-primary',
                                                'px-3 py-4 text-15px font-medium space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        {/*<Signdialog />*/}


                        {/* REGISTER DIALOG */}
                        <Contactus />

                        {/*<Registerdialog />*/}


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
