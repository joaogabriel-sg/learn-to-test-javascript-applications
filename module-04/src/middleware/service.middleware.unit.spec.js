import { get } from './service.middleware';

describe('Middleware > Service', () => {
  it('should add services to the request', () => {
    const req = {};
    const next = jest.fn().mockName('next');

    get(req, null, next);

    expect(req.service).toBeDefined();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(/* nothing */);
  });
});
