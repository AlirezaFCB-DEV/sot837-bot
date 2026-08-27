import { ReactNode } from "react";

export default function History(): ReactNode {
  return (
    <ul className="w-full flex flex-col justify-start items-end text-right gap-3">
      <h2 className="text-gray-600 dark:text-gray-500 text-lg">امروز</h2>

      <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
        پیشنویس ایمیل به تیم فروش
      </li>

      <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
        خلاصه گذارش بازار سه ماهه
      </li>

      <h2 className="text-gray-600 dark:text-gray-500 text-lg">هفته گذشته</h2>

      <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
        برنامه سفر به اصفهان
      </li>

      <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
        ویرایش رزومه کاری
      </li>

      <li className="w-full py-3 px-5 rounded-lg bg-gray-200 dark:bg-black/60">
        ایده برای اسم فروشگاه
      </li>
    </ul>
  );
}
