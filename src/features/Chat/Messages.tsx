import { ReactNode } from "react";

export default function Messages(): ReactNode {
  return (
    <ul className="w-full h-full flex flex-col justify-start items-center gap-7 p-5 mt-22">
      <li className="w-full pl-10" dir="rtl">
        <p className="bg-green-400 p-3 w-fit text-white rounded-2xl" dir="rtl">
          سلام خوبی؟
        </p>
      </li>

      <li className="w-full pr-10" dir="ltr">
        <p
          className="bg-gray-100 dark:bg-white/20 border border-gray-300 dark:border-gray-600 p-3 w-fit rounded-2xl"
          dir="rtl"
        >
          ممنونم من که عالیم خودت خوبی؟ امروز چه کمکی میتونم بکنم؟
        </p>
      </li>

      <li className="w-full pl-10" dir="rtl">
        <p className="bg-green-400 p-3 w-fit text-white rounded-2xl" dir="rtl">
          خدارو شکر <br /> فقط میخواستم حالتو بپرسم
        </p>
      </li>
    </ul>
  );
}
