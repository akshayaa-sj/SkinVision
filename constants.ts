
import { PsoriasisType, PsoriasisInfo } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'For Patients', path: '/patients' },
  { name: 'For Doctors', path: '/doctors' },
  { name: 'About Psoriasis', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const PSORIASIS_DATA: PsoriasisInfo[] = [
  {
    name: PsoriasisType.Plaque,
    image: 'https://picsum.photos/seed/plaque/400/300',
    symptoms: ['Raised, red patches covered with a silvery white buildup of dead skin cells.', 'Patches can be itchy and painful.', 'Most common on scalp, knees, elbows, and lower back.'],
    treatment: 'Topical treatments, light therapy, and systemic medications.'
  },
  {
    name: PsoriasisType.Guttate,
    image: 'https://picsum.photos/seed/guttate/400/300',
    symptoms: ['Small, water-drop-shaped, red spots on the skin.', 'Often appears after a bacterial infection like strep throat.', 'Commonly affects children and young adults.'],
    treatment: 'Often clears up on its own, but may require phototherapy or medication.'
  },
  {
    name: PsoriasisType.Inverse,
    image: 'https://picsum.photos/seed/inverse/400/300',
    symptoms: ['Smooth, red, shiny patches of skin.', 'Appears in skin folds like armpits, groin, and under the breasts.', 'Worsened by friction and sweating.'],
    treatment: 'Topical steroids and anti-fungal or anti-yeast creams.'
  },
  {
    name: PsoriasisType.Pustular,
    image: 'https://picsum.photos/seed/pustular/400/300',
    symptoms: ['Widespread pustules (pus-filled blisters) on a background of red skin.', 'Can be accompanied by fever, chills, and severe itching.', 'A less common form that requires prompt medical care.'],
    treatment: 'Systemic medications or phototherapy; can be a medical emergency.'
  },
  {
    name: PsoriasisType.Erythrodermic,
    image: 'https://picsum.photos/seed/erythro/400/300',
    symptoms: ['Widespread, fiery redness of the skin that appears burned.', 'Severe itching, pain, and peeling of the skin.', 'Can disrupt body chemistry, causing severe illness.'],
    treatment: 'A medical emergency requiring immediate hospitalization and aggressive treatment.'
  },
];
