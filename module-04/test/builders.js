import * as validator from 'express-validator';
import { appError } from '@/utils';
import userStub from 'test/stubs/user.json';
import orderStub from 'test/stubs/order.json';

export function buildReq({ user = buildUser(), ...overrides } = {}) {
  const req = {
    user,
    headers: { email: user.email },
    body: {},
    params: {},
    ...overrides,
  };
  return req;
}

export function buildRes(overrides = {}) {
  const res = {
    json: jest.fn(() => res).mockName('res.json()'),
    status: jest.fn(() => res).mockName('res.status()'),
    ...overrides,
  };
  return res;
}

export function buildNext(impl) {
  return jest.fn(impl).mockName('next');
}

export function buildError(status = 500, message = 'Default error message') {
  return appError(message, status);
}

export function buildValidationErrors(condition) {
  const isEmpty = jest.fn().mockReturnValueOnce(!condition);

  jest.spyOn(validator, 'validationResult').mockReturnValueOnce({
    isEmpty,
    array: jest.fn().mockReturnValueOnce(condition ? ['error1', 'error2'] : []),
  });

  return { isEmpty };
}

export function buildUser() {
  return userStub;
}

export function buildOrder() {
  return orderStub;
}
