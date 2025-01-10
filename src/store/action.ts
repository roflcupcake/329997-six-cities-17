import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../const/const';
import { Offer } from '../types/offer-type';
import { AuthorizationStatus } from '../const/const';
import { UserData } from '../types/user-data-type';

export const changeCity = createAction<{ city: string }>('city/changeCity');
export const loadOffers = createAction<Offer[]>('common/loadOffers');
export const changeSortingState = createAction<{ sortingState: boolean }>('common/setSortingState');
export const changeSortingType = createAction<SortType>('common/setSortingType');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('common/setError');
export const setLoadingStatus = createAction<boolean>('common/setLoadingStatus');
export const setUserData = createAction<UserData | null>('user/setUser');
