import Link from "next/link";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Logo, SideMenu } from "@/components/index";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const Header = () => {
  const { totalPrice, cartCount, formattedtotalprice } = useShoppingCart();

  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container xl:max-w-screen-xl mx-auto p-6 flex justify-between">
        <Link href="/cart">
          <a className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
            <div className="relative">
              <ShoppingCartIcon className="w-7 h-7 mt-2 flex-shrink-0" />
            </div>
            <p className="text-lg mt-2">
              US
              {formatCurrency(totalPrice)}{" "}
              <span className="text-sm text-gray-500">({cartCount})</span>
            </p>
          </a>
        </Link>
        <Logo />
        <SideMenu />
      </div>
    </header>
  );
};

export default Header;
