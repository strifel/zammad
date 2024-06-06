import * as Types from '#shared/graphql/types.ts';

import gql from 'graphql-tag';
import { OrganizationAttributesFragmentDoc } from '../../../../../../shared/entities/organization/graphql/organizationAttributes.api';
import { OrganizationMembersFragmentDoc } from '../fragments/organizationMembers.api';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type ReactiveFunction<TParam> = () => TParam;

export const OrganizationDocument = gql`
    query organization($organizationId: ID, $organizationInternalId: Int, $membersCount: Int) {
  organization(
    organization: {organizationId: $organizationId, organizationInternalId: $organizationInternalId}
  ) {
    policy {
      update
    }
    ...organizationAttributes
    ...organizationMembers
  }
}
    ${OrganizationAttributesFragmentDoc}
${OrganizationMembersFragmentDoc}`;
export function useOrganizationQuery(variables: Types.OrganizationQueryVariables | VueCompositionApi.Ref<Types.OrganizationQueryVariables> | ReactiveFunction<Types.OrganizationQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<Types.OrganizationQuery, Types.OrganizationQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<Types.OrganizationQuery, Types.OrganizationQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<Types.OrganizationQuery, Types.OrganizationQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<Types.OrganizationQuery, Types.OrganizationQueryVariables>(OrganizationDocument, variables, options);
}
export function useOrganizationLazyQuery(variables: Types.OrganizationQueryVariables | VueCompositionApi.Ref<Types.OrganizationQueryVariables> | ReactiveFunction<Types.OrganizationQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<Types.OrganizationQuery, Types.OrganizationQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<Types.OrganizationQuery, Types.OrganizationQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<Types.OrganizationQuery, Types.OrganizationQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<Types.OrganizationQuery, Types.OrganizationQueryVariables>(OrganizationDocument, variables, options);
}
export type OrganizationQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<Types.OrganizationQuery, Types.OrganizationQueryVariables>;