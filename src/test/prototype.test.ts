import { UserPrototypeCache } from '../creational_patterns/prototype/UserPrototypeCache';
import { GuestUser } from '../creational_patterns/factory/GuestUser'; // Adjusted path to match the correct location

test('clones a guest user', () => {
  const original = new GuestUser('001', 'guest@test.com');
  UserPrototypeCache.loadCache('guest', original);
  const clone = UserPrototypeCache.getUser('guest');
  expect(clone).toBeInstanceOf(GuestUser);
  expect(clone.email).toBe(original.email);
});
