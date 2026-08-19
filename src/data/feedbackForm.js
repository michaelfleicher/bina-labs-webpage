// Hebrew copy + question config for the unlisted client feedback page (/feedback).
// All user-facing text lives here so wording can be edited without touching the component.

export const FEEDBACK_INTRO = {
  eyebrow: '// client_feedback · bina_labs',
  headlineLead: 'שלוש דקות שעוזרות לי',
  headlineAccent: 'להשתפר',
  paragraphs: [
    'השירות הוא לא רק מה שנמסר בסוף - הוא כל מה שקרה בדרך. המשוב שלך הוא הדרך הטובה ביותר שיש לי לדעת איך הדרך הזו הרגישה מהצד שלך.',
    'זה חשוב לי מקצועית, ולא פחות מזה - אישית. אני קורא כל מילה בעצמי. גם דברים לא נעימים, ואולי במיוחד הם, הם מה שמאפשר לי להשתפר. אשמח לכנות מלאה.',
  ],
  signature: 'מיכאל, Bina Labs',
};

export const SCOPE_OPTIONS = [
  { value: 'single', label: 'פרויקט בודד', hint: 'סיימנו, או לקראת סיום' },
  { value: 'multiple', label: 'כמה פרויקטים במקביל', hint: 'המשוב מתייחס לפרויקט מסוים' },
];

export const RATINGS = [
  { key: 'overall', label: 'שביעות רצון כללית', required: true },
  { key: 'communication', label: 'תקשורת, זמינות ושקיפות' },
  { key: 'professionalism', label: 'מקצועיות ואיכות התוצר' },
  { key: 'recommend', label: 'הסיכוי שתמליץ או תמליצי עליי לקולגה' },
];

export const RATING_SCALE_LOW = 'נמוך';
export const RATING_SCALE_HIGH = 'מצוין';

export const OPEN_QUESTIONS = [
  {
    key: 'worked',
    label: 'מה עבד טוב?',
    placeholder: 'מה היה הכי בעל ערך עבורך בעבודה המשותפת?',
  },
  {
    key: 'improve',
    label: 'מה יכולתי לעשות טוב יותר?',
    placeholder: 'החלק הכי חשוב עבורי. כל דבר - גדול או קטן, בתהליך או בתוצאה.',
    required: true,
  },
  {
    key: 'anything',
    label: 'משהו נוסף שחשוב שאדע?',
    placeholder: 'אופציונלי',
  },
];

export const FEEDBACK_LABELS = {
  formHeader: '// feedback.form · v1',
  company: 'שם החברה',
  companyPlaceholder: 'החברה שלך',
  email: 'אימייל (אופציונלי, אם תרצה שאחזור אליך)',
  emailPlaceholder: 'you@company.com',
  scope: 'על מה המשוב?',
  projectName: 'שם הפרויקט',
  projectNamePlaceholder: 'איזה פרויקט מתוך אלה שרצים במקביל?',
  ratingsTitle: 'דירוג מהיר',
  ratingsHint: 'מ־1 (נמוך) עד 5 (מצוין)',
  openTitle: 'במילים שלך',
  submit: 'שליחת המשוב',
  submitting: 'שולח...',
  privacy: 'המשוב מגיע ישירות לתיבת המייל שלי בלבד.',
};

export const FEEDBACK_ERRORS = {
  company: 'מה שם החברה?',
  scope: 'בחר על מה המשוב מתייחס.',
  projectName: 'איזה פרויקט? כתוב את שם הפרויקט כדי שאדע למה המשוב מתייחס.',
  email: 'כתובת האימייל לא נראית תקינה.',
  overall: 'בחר דירוג לשביעות הרצון הכללית.',
  improve: 'זה החלק שהכי עוזר לי - גם משפט אחד מספיק.',
  notConfigured: 'הטופס אינו מוגדר כרגע. אפשר לשלוח לי מייל ישירות: intelligence@bina-labs.com',
  send: 'לא הצלחנו לשלוח. אפשר לשלוח לי מייל ישירות: intelligence@bina-labs.com',
  network: 'תקלת רשת. אפשר לשלוח לי מייל ישירות: intelligence@bina-labs.com',
};

export const FEEDBACK_THANKS = {
  status: '● FEEDBACK_RECEIVED',
  headlineLead: 'תודה.',
  headlineAccent: 'זה באמת עוזר לי.',
  body: 'המשוב שלך הגיע ישירות אליי, ואני אקרא כל מילה. אם כתבת משהו שדורש תשובה - אחזור אליך.',
  reset: 'למילוי משוב נוסף',
};
