import React, { useEffect } from 'react';
import {Spin} from 'antd';
import ConfirmPurchase from './ConfirmPurchase';

const SpinCharge: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
        setLoading(false);
    },2000)

    return()=> clearTimeout(timeOut)
  }, [])
  return (
    <>
      <Spin spinning={loading} delay={200}>
        {!loading?(
            <ConfirmPurchase />

        ): (null)}
                    
      </Spin>
      <div style={{ marginTop: 40 }}>
      </div>
    </>
  );
};

export default SpinCharge;