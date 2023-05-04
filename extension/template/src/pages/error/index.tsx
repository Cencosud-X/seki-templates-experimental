import { ConfigProvider, Result } from 'antd'

import ErrorImage from './../../assets/not-found.png';

interface IProps {
  message: string
}

const ErrorPage = ({message}: IProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: '#df1a5f',
        }
      }}>
      <Result
        title={message}
        icon={<img src={ErrorImage} width={300} height={300} />}
      />
    </ConfigProvider>
  )
}

export default ErrorPage
