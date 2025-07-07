import React from 'react';

const PremiumModal = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-lg max-w-md text-white">
            <h2 className="text-xl font-bold mb-4">Unlock Premium</h2>
            <p className="mb-4">
              Access unblurred handles, full search, dark reports, alerts and more with Premium.
            </p>
            <ul className="list-disc ml-6 text-sm mb-4 opacity-80">
              <li>Unlimited report expansions</li>
              <li>Handle alerts + scoring</li>
              <li>Weekly RedFlag Digest</li>
              <li>Dark Report access</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="bg-premiumGold text-black px-4 py-2 rounded font-bold">
                $9.99/month – Unlock Now
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-sm text-gray-400 underline mt-2"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button to Trigger Modal */}
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-premiumGold text-black px-4 py-2 rounded-full shadow-xl font-bold"
      >
        💎 Upgrade
      </button>
    </>
  );
};

export default PremiumModal;
