import { UserPrototypeCache } from '../src/creational_patterns/prototype/UserPrototypeCache';
import { GuestUser } from '../src/creational_patterns/simple_factory/GuestUser';

test('clones a guest user', () => {
  const original = new GuestUser('001', 'guest@test.com');
  UserPrototypeCache.loadCache('guest', original);
  const clone = UserPrototypeCache.getUser('guest');
  expect(clone).toBeInstanceOf(GuestUser);
  expect(clone.email).toBe(original.email);
});
