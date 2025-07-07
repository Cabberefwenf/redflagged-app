import React, { useState } from 'react';

const flagOptions = ['Green', 'Yellow', 'Red', 'Black'];
const cityOptions = ['Miami', 'Los Angeles', 'New York', 'Chicago', 'Houston'];

const ShareExperience = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    images: [],
    flag: '',
    city: '',
    handle: '',
    story: '',
    termsAccepted: false
  });

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    alert('Report submitted (stubbed)');
    setStep(1);
    setForm({
      images: [],
      flag: '',
      city: '',
      handle: '',
      story: '',
      termsAccepted: false
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Submit a Report</h2>
      <div className="bg-zinc-900 p-4 rounded-lg shadow">
        {step === 1 && (
          <div>
            <label className="block mb-2">Upload 1–3 images (UI only)</label>
            <input type="file" multiple className="mb-4" />
            <button onClick={handleNext} className="bg-flagRed px-4 py-2 rounded text-white">
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2">Select Flag</label>
            <select
              className="w-full p-2 rounded bg-zinc-800 text-white"
              value={form.flag}
              onChange={(e) => setForm({ ...form, flag: e.target.value })}
            >
              <option value="">Choose flag</option>
              {flagOptions.map((flag) => (
                <option key={flag} value={flag}>
                  {flag}
                </option>
              ))}
            </select>
            <div className="flex justify-between mt-4">
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="block mb-2">Select City</label>
            <select
              className="w-full p-2 rounded bg-zinc-800 text-white"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            >
              <option value="">Choose city</option>
              {cityOptions.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
            <div className="flex justify-between mt-4">
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <label className="block mb-2">Enter Story (200–1000 characters)</label>
            <textarea
              className="w-full p-2 rounded bg-zinc-800 text-white"
              rows={5}
              value={form.story}
              onChange={(e) => setForm({ ...form, story: e.target.value })}
            />
            <div className="flex justify-between mt-4">
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <label className="block mb-2">Optional Handle (e.g. @user)</label>
            <input
              className="w-full p-2 rounded bg-zinc-800 text-white"
              type="text"
              value={form.handle}
              onChange={(e) => setForm({ ...form, handle: e.target.value })}
            />
            <div className="flex justify-between mt-4">
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <label className="block mb-4">
              <input
                type="checkbox"
                checked={form.termsAccepted}
                onChange={(e) => setForm({ ...form, termsAccepted: e.target.checked })}
              />{' '}
              I agree to the terms: no names, no revenge, no nudity. All posts go through
              moderation.
            </label>
            <div className="flex justify-between">
              <button onClick={handleBack}>Back</button>
              <button
                onClick={handleSubmit}
                disabled={!form.termsAccepted}
                className={`px-4 py-2 rounded ${
                  form.termsAccepted ? 'bg-flagRed text-white' : 'bg-gray-600 text-gray-300'
                }`}
              >
                Submit Anonymously
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareExperience;
