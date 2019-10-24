export interface User {
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
  image?: string;
  isActive?: boolean;
  balance?: number;
  registered?: any;
  hide?: true;
}

// the question mark makes them optional when utilizing the interface
