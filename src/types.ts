export interface Cause {
  id: string;
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  category: 'Education' | 'Food Support' | 'Healthcare' | 'Environment' | 'Disaster Relief';
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}
