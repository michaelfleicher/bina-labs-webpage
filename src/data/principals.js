// Principal name -> /about anchor + LinkedIn profile.
// Used by bylines and author JSON-LD so a post or case study credited to any
// principal links to the right profile. Unknown names fall back to Michael.

export const PRINCIPALS = {
  'Michael Fleicher': { anchor: 'michael', linkedin: 'https://www.linkedin.com/in/michaelfleicher' },
  'Ronen Chen': { anchor: 'ronen', linkedin: 'https://www.linkedin.com/in/ronen-chen/' },
  'Or Zilberberg': { anchor: 'or', linkedin: 'https://www.linkedin.com/in/or-zilberberg/' },
};

const DEFAULT_PRINCIPAL = PRINCIPALS['Michael Fleicher'];

/**
 * @param {string | undefined} name
 * @returns {{ anchor: string, linkedin: string }}
 */
export const principalFor = (name) => PRINCIPALS[name] ?? DEFAULT_PRINCIPAL;
