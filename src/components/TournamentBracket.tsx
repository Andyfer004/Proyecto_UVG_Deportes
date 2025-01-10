import React from 'react';
import { Bracket, IRoundProps } from 'react-brackets';

const MyBracket: React.FC = () => {
  const rounds: IRoundProps[] = [
    {
      title: 'Semi Finals',
      seeds: [
        { id: 5, date: new Date().toDateString(), teams: [{ name: 'Winner QF1' }, { name: 'Winner QF2' }] },
        { id: 6, date: new Date().toDateString(), teams: [{ name: 'Winner QF3' }, { name: 'Winner QF4' }] },
      ],
    },
    {
      title: 'Finals',
      seeds: [
        { id: 7, date: new Date().toDateString(), teams: [{ name: 'Winner SF1' }, { name: 'Winner SF2' }] },
      ],
    },
  ];

  return (
    <Bracket
      rounds={rounds}
      roundTitleComponent={(title: React.ReactNode, roundIndex: number) => (
        <div style={{ alignItems: 'center',textAlign: 'center', color: '#4A90E2', fontSize: '20px', fontWeight: 'bold' }}>
          {title}
        </div>
      )}
    />
  );
};

export default MyBracket;