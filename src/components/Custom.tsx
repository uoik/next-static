'use client';

import '@sunzi/customeow/es/index.css';
import '@sunzi/customeow-shein/es/index.css';

import dynamic from 'next/dynamic';

const CustomeowShein = dynamic(() => import('@sunzi/customeow-shein'), { ssr: false });

export default function Page({ data }: any) {

  const customeowSheinProps: any = {
    ...data?.customData,
    locals: data?.locals,
    customizerId: data?.customizerVersion,
    customizerVersion: data?.customizerVersion,
    previews: data?.previews,
    knifes: data?.knifes,
    lang: 'en_US',
    env:'beta',
    onClose:() => console.log('点击关闭'),
    onConfirm: () => console.log('点击完成')
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <CustomeowShein
        {...customeowSheinProps}
      />
    </div>
  );
}