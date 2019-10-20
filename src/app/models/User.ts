export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
}

// the question mark makes them optional when utilizing the interface
