import {entity} from "@google-cloud/datastore/build/src/entity";
import {Operator} from "@google-cloud/datastore/build/src/query";

export interface GcpCredentialsProvider {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
}

export enum DatastoreKinds {
    METRICS = "METRICS"
}

export type DatastoreEntities = entity.Key | Array<entity.Key>;

export interface DatastoreEntity<T = any> {
    key: entity.Key;
    data: T;
}

export interface EntityBuilder<T = any> {
    kind: DatastoreKinds,
    id: string,
    data: T;
}

export interface QueryableFilter {
    property: string;
    operator: Operator;
    value: any;
}

export interface QueryableBase {
    limit?: number;
    offset?: number;
    filters?: Array<QueryableFilter>;
}

export interface Queryable extends QueryableBase {
    kind: DatastoreKinds;
}

export interface QueryResultBase<T = any> {
    entities: Array<T>;
    resultsStatus: string;
}

export interface QueryResult<T = any> extends QueryResultBase<T> {
    isEmpty: () => boolean
}
