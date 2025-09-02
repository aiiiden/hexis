import { shortenWalletAddress } from '@/lib/formatter';
import { useConnectWallet } from '../hooks/useConnectWallet';

export default function SignInPage() {
  const { connectAsync } = useConnectWallet();

  return (
    <div>
      <button onClick={connectAsync}>
        {isConnected ? shortenWalletAddress(address!) : 'Connect Wallet'}
      </button>
    </div>
  );
}
