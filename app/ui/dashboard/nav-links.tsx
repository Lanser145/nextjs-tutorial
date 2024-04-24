/*El cap 5 te muestra el patron
de enlaces activos para saber en que pagina estas*/
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
 {/*Aqui se puede escribir todo 
lo que sea "header entre comillas.
Que vaya en 2ºplano"*/}

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        
        const LinkIcon = link.icon;
        {/*<a </a> SIRVE PARA LINKEAR*/}
        {/* navegar entre las páginas sin ver una actualización completa*/}
        return ( 
          <Link
            key={link.name}
            href={link.href}
            /*El cap 5 te muestra el patron
de enlaces activos para saber en que pagina estas*/

            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
