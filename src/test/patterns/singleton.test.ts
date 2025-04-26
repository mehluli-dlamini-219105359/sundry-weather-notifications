import { AnalyticsLogger } from '../src/creational_patterns/singleton/AnalyticsLogger';

test('returns the same instance every time', () => {
  const instance1 = AnalyticsLogger.getInstance();
  const instance2 = AnalyticsLogger.getInstance();
  expect(instance1).toBe(instance2);
});
