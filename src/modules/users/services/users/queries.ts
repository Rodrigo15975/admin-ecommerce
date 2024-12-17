import { useQuery } from '@tanstack/react-query'
import { getAllUser, getOneUser, getProfileUser } from './api'

export const useGetAllUsers = () =>
  useQuery({
    queryFn: () => getAllUser(),
    queryKey: ['users'],
    // staleTime: 300000,
    gcTime: 600000,
  })

export const useGetOneUser = (id: number | undefined) =>
  useQuery({
    queryFn: () => getOneUser(id),
    queryKey: ['users', id],
    // staleTime: 300000,
    gcTime: 600000,
    enabled: !!id, // Solo se ejecuta si `userId` tiene valor
  })

export const useGetProfile = () =>
  useQuery({
    queryFn: getProfileUser,
    queryKey: ['profile'],
    // staleTime: 300000,
    gcTime: 600000,
  })
