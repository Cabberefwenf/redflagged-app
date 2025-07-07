import React from 'react';

const mockReports = [
  {
    id: 1,
    images: ['/placeholder1.jpg'],
    flag: 'Red',
    city: 'Miami',
    handle: '@vanessa__',
    story: 'Went on 3 dates, then found out she was still seeing her ex the whole time...',
    tags: ['Ghosting', 'Breadcrumbing']
  },
  {
    id: 2,
    images: ['/placeholder2.jpg'],
    flag: 'Yellow',
    city: 'Los Angeles',
    handle: '@lilghostgirl',
    story: 'Loved the vibes, but communication started dropping off quick. Something felt off.',
    tags: ['Mixed Signals']
  }
];

const ExperienceFeed = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">RedFlagged Feed</h1>
      {mockReports.map((report) => (
        <div key={report.id} className="mb-6 bg-zinc-900 rounded-xl p-4 shadow-lg">
          <img
            src={report.images[0]}
            alt="Reported"
            className="w-full h-64 object-cover rounded-lg mb-3"
          />
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-bold ${getFlagColor(report.flag)}`}>
              {report.flag} Flag
            </span>
            <span className="text-sm opacity-60">{report.city}</span>
          </div>
          <p className="text-sm opacity-90 mb-2">{report.story.slice(0, 100)}...</p>
          <div className="flex gap-2 flex-wrap">
            {report.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-white opacity-70"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const getFlagColor = (flag: string) => {
  switch (flag) {
    case 'Green':
      return 'text-flagGreen';
    case 'Yellow':
      return 'text-flagYellow';
    case 'Red':
      return 'text-flagRed';
    case 'Black':
      return 'text-flagBlack';
    default:
      return 'text-white';
  }
};

export default ExperienceFeed;
