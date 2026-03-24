
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model purchase
 * 
 */
export type purchase = $Result.DefaultSelection<Prisma.$purchasePayload>
/**
 * Model purchase_item
 * 
 */
export type purchase_item = $Result.DefaultSelection<Prisma.$purchase_itemPayload>
/**
 * Model item
 * 
 */
export type item = $Result.DefaultSelection<Prisma.$itemPayload>
/**
 * Model item_producer
 * 
 */
export type item_producer = $Result.DefaultSelection<Prisma.$item_producerPayload>
/**
 * Model item_type
 * 
 */
export type item_type = $Result.DefaultSelection<Prisma.$item_typePayload>
/**
 * Model country
 * 
 */
export type country = $Result.DefaultSelection<Prisma.$countryPayload>
/**
 * Model store
 * 
 */
export type store = $Result.DefaultSelection<Prisma.$storePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.purchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase_item`: Exposes CRUD operations for the **purchase_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchase_items
    * const purchase_items = await prisma.purchase_item.findMany()
    * ```
    */
  get purchase_item(): Prisma.purchase_itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item_producer`: Exposes CRUD operations for the **item_producer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_producers
    * const item_producers = await prisma.item_producer.findMany()
    * ```
    */
  get item_producer(): Prisma.item_producerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item_type`: Exposes CRUD operations for the **item_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_types
    * const item_types = await prisma.item_type.findMany()
    * ```
    */
  get item_type(): Prisma.item_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.countryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.storeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    purchase: 'purchase',
    purchase_item: 'purchase_item',
    item: 'item',
    item_producer: 'item_producer',
    item_type: 'item_type',
    country: 'country',
    store: 'store'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "purchase" | "purchase_item" | "item" | "item_producer" | "item_type" | "country" | "store"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      purchase: {
        payload: Prisma.$purchasePayload<ExtArgs>
        fields: Prisma.purchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.purchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.purchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>
          }
          findFirst: {
            args: Prisma.purchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.purchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>
          }
          findMany: {
            args: Prisma.purchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>[]
          }
          create: {
            args: Prisma.purchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>
          }
          createMany: {
            args: Prisma.purchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.purchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>[]
          }
          delete: {
            args: Prisma.purchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>
          }
          update: {
            args: Prisma.purchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>
          }
          deleteMany: {
            args: Prisma.purchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.purchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.purchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>[]
          }
          upsert: {
            args: Prisma.purchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.purchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.purchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      purchase_item: {
        payload: Prisma.$purchase_itemPayload<ExtArgs>
        fields: Prisma.purchase_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.purchase_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.purchase_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>
          }
          findFirst: {
            args: Prisma.purchase_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.purchase_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>
          }
          findMany: {
            args: Prisma.purchase_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>[]
          }
          create: {
            args: Prisma.purchase_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>
          }
          createMany: {
            args: Prisma.purchase_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.purchase_itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>[]
          }
          delete: {
            args: Prisma.purchase_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>
          }
          update: {
            args: Prisma.purchase_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>
          }
          deleteMany: {
            args: Prisma.purchase_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.purchase_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.purchase_itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>[]
          }
          upsert: {
            args: Prisma.purchase_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemPayload>
          }
          aggregate: {
            args: Prisma.Purchase_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase_item>
          }
          groupBy: {
            args: Prisma.purchase_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Purchase_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.purchase_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Purchase_itemCountAggregateOutputType> | number
          }
        }
      }
      item: {
        payload: Prisma.$itemPayload<ExtArgs>
        fields: Prisma.itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findFirst: {
            args: Prisma.itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findMany: {
            args: Prisma.itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          create: {
            args: Prisma.itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          createMany: {
            args: Prisma.itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          delete: {
            args: Prisma.itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          update: {
            args: Prisma.itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          deleteMany: {
            args: Prisma.itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          upsert: {
            args: Prisma.itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      item_producer: {
        payload: Prisma.$item_producerPayload<ExtArgs>
        fields: Prisma.item_producerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.item_producerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.item_producerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>
          }
          findFirst: {
            args: Prisma.item_producerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.item_producerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>
          }
          findMany: {
            args: Prisma.item_producerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>[]
          }
          create: {
            args: Prisma.item_producerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>
          }
          createMany: {
            args: Prisma.item_producerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.item_producerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>[]
          }
          delete: {
            args: Prisma.item_producerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>
          }
          update: {
            args: Prisma.item_producerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>
          }
          deleteMany: {
            args: Prisma.item_producerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.item_producerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.item_producerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>[]
          }
          upsert: {
            args: Prisma.item_producerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_producerPayload>
          }
          aggregate: {
            args: Prisma.Item_producerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem_producer>
          }
          groupBy: {
            args: Prisma.item_producerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Item_producerGroupByOutputType>[]
          }
          count: {
            args: Prisma.item_producerCountArgs<ExtArgs>
            result: $Utils.Optional<Item_producerCountAggregateOutputType> | number
          }
        }
      }
      item_type: {
        payload: Prisma.$item_typePayload<ExtArgs>
        fields: Prisma.item_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.item_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.item_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>
          }
          findFirst: {
            args: Prisma.item_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.item_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>
          }
          findMany: {
            args: Prisma.item_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>[]
          }
          create: {
            args: Prisma.item_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>
          }
          createMany: {
            args: Prisma.item_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.item_typeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>[]
          }
          delete: {
            args: Prisma.item_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>
          }
          update: {
            args: Prisma.item_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>
          }
          deleteMany: {
            args: Prisma.item_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.item_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.item_typeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>[]
          }
          upsert: {
            args: Prisma.item_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_typePayload>
          }
          aggregate: {
            args: Prisma.Item_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem_type>
          }
          groupBy: {
            args: Prisma.item_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Item_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.item_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Item_typeCountAggregateOutputType> | number
          }
        }
      }
      country: {
        payload: Prisma.$countryPayload<ExtArgs>
        fields: Prisma.countryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.countryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.countryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          findFirst: {
            args: Prisma.countryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.countryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          findMany: {
            args: Prisma.countryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>[]
          }
          create: {
            args: Prisma.countryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          createMany: {
            args: Prisma.countryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.countryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>[]
          }
          delete: {
            args: Prisma.countryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          update: {
            args: Prisma.countryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          deleteMany: {
            args: Prisma.countryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.countryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.countryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>[]
          }
          upsert: {
            args: Prisma.countryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.countryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.countryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      store: {
        payload: Prisma.$storePayload<ExtArgs>
        fields: Prisma.storeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          findFirst: {
            args: Prisma.storeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          findMany: {
            args: Prisma.storeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          create: {
            args: Prisma.storeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          createMany: {
            args: Prisma.storeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          delete: {
            args: Prisma.storeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          update: {
            args: Prisma.storeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          deleteMany: {
            args: Prisma.storeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          upsert: {
            args: Prisma.storeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.storeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.storeCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    purchase?: purchaseOmit
    purchase_item?: purchase_itemOmit
    item?: itemOmit
    item_producer?: item_producerOmit
    item_type?: item_typeOmit
    country?: countryOmit
    store?: storeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    purchases: number
    stores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    stores?: boolean | UserCountOutputTypeCountStoresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storeWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    purchaseItems: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseItems?: boolean | ItemCountOutputTypeCountPurchaseItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPurchaseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_itemWhereInput
  }


  /**
   * Count Type Item_producerCountOutputType
   */

  export type Item_producerCountOutputType = {
    items: number
  }

  export type Item_producerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Item_producerCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * Item_producerCountOutputType without action
   */
  export type Item_producerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_producerCountOutputType
     */
    select?: Item_producerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Item_producerCountOutputType without action
   */
  export type Item_producerCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }


  /**
   * Count Type Item_typeCountOutputType
   */

  export type Item_typeCountOutputType = {
    items: number
  }

  export type Item_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Item_typeCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * Item_typeCountOutputType without action
   */
  export type Item_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_typeCountOutputType
     */
    select?: Item_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Item_typeCountOutputType without action
   */
  export type Item_typeCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    items: number
    itemProducers: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CountryCountOutputTypeCountItemsArgs
    itemProducers?: boolean | CountryCountOutputTypeCountItemProducersArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountItemProducersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_producerWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    purchases: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | StoreCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    password_hash: string | null
    email: string | null
    created_at: Date | null
    last_login: Date | null
    first_name: string | null
    last_name: string | null
    is_admin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    password_hash: string | null
    email: string | null
    created_at: Date | null
    last_login: Date | null
    first_name: string | null
    last_name: string | null
    is_admin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    user_name: number
    password_hash: number
    email: number
    created_at: number
    last_login: number
    first_name: number
    last_name: number
    is_admin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    user_name?: true
    password_hash?: true
    email?: true
    created_at?: true
    last_login?: true
    first_name?: true
    last_name?: true
    is_admin?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    password_hash?: true
    email?: true
    created_at?: true
    last_login?: true
    first_name?: true
    last_name?: true
    is_admin?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    user_name?: true
    password_hash?: true
    email?: true
    created_at?: true
    last_login?: true
    first_name?: true
    last_name?: true
    is_admin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    user_name: string
    password_hash: string
    email: string | null
    created_at: Date
    last_login: Date | null
    first_name: string | null
    last_name: string | null
    is_admin: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    password_hash?: boolean
    email?: boolean
    created_at?: boolean
    last_login?: boolean
    first_name?: boolean
    last_name?: boolean
    is_admin?: boolean
    purchases?: boolean | user$purchasesArgs<ExtArgs>
    stores?: boolean | user$storesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    password_hash?: boolean
    email?: boolean
    created_at?: boolean
    last_login?: boolean
    first_name?: boolean
    last_name?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    password_hash?: boolean
    email?: boolean
    created_at?: boolean
    last_login?: boolean
    first_name?: boolean
    last_name?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    user_id?: boolean
    user_name?: boolean
    password_hash?: boolean
    email?: boolean
    created_at?: boolean
    last_login?: boolean
    first_name?: boolean
    last_name?: boolean
    is_admin?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_name" | "password_hash" | "email" | "created_at" | "last_login" | "first_name" | "last_name" | "is_admin", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | user$purchasesArgs<ExtArgs>
    stores?: boolean | user$storesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      purchases: Prisma.$purchasePayload<ExtArgs>[]
      stores: Prisma.$storePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_name: string
      password_hash: string
      email: string | null
      created_at: Date
      last_login: Date | null
      first_name: string | null
      last_name: string | null
      is_admin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends user$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, user$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends user$storesArgs<ExtArgs> = {}>(args?: Subset<T, user$storesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'Int'>
    readonly user_name: FieldRef<"user", 'String'>
    readonly password_hash: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly last_login: FieldRef<"user", 'DateTime'>
    readonly first_name: FieldRef<"user", 'String'>
    readonly last_name: FieldRef<"user", 'String'>
    readonly is_admin: FieldRef<"user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.purchases
   */
  export type user$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    where?: purchaseWhereInput
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[]
    cursor?: purchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * user.stores
   */
  export type user$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    where?: storeWhereInput
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    cursor?: storeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    purchase_id: number | null
    user_id: number | null
    store_id: number | null
    total_price: Decimal | null
    item_count: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    purchase_id: number | null
    user_id: number | null
    store_id: number | null
    total_price: Decimal | null
    item_count: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    purchase_id: number | null
    user_id: number | null
    purchased_at: Date | null
    store_id: number | null
    total_price: Decimal | null
    item_count: number | null
  }

  export type PurchaseMaxAggregateOutputType = {
    purchase_id: number | null
    user_id: number | null
    purchased_at: Date | null
    store_id: number | null
    total_price: Decimal | null
    item_count: number | null
  }

  export type PurchaseCountAggregateOutputType = {
    purchase_id: number
    user_id: number
    purchased_at: number
    store_id: number
    total_price: number
    item_count: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    purchase_id?: true
    user_id?: true
    store_id?: true
    total_price?: true
    item_count?: true
  }

  export type PurchaseSumAggregateInputType = {
    purchase_id?: true
    user_id?: true
    store_id?: true
    total_price?: true
    item_count?: true
  }

  export type PurchaseMinAggregateInputType = {
    purchase_id?: true
    user_id?: true
    purchased_at?: true
    store_id?: true
    total_price?: true
    item_count?: true
  }

  export type PurchaseMaxAggregateInputType = {
    purchase_id?: true
    user_id?: true
    purchased_at?: true
    store_id?: true
    total_price?: true
    item_count?: true
  }

  export type PurchaseCountAggregateInputType = {
    purchase_id?: true
    user_id?: true
    purchased_at?: true
    store_id?: true
    total_price?: true
    item_count?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchase to aggregate.
     */
    where?: purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type purchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchaseWhereInput
    orderBy?: purchaseOrderByWithAggregationInput | purchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: purchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    purchase_id: number
    user_id: number
    purchased_at: Date
    store_id: number | null
    total_price: Decimal
    item_count: number
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends purchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type purchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_id?: boolean
    user_id?: boolean
    purchased_at?: boolean
    store_id?: boolean
    total_price?: boolean
    item_count?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | purchase$storeArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type purchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_id?: boolean
    user_id?: boolean
    purchased_at?: boolean
    store_id?: boolean
    total_price?: boolean
    item_count?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | purchase$storeArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type purchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_id?: boolean
    user_id?: boolean
    purchased_at?: boolean
    store_id?: boolean
    total_price?: boolean
    item_count?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | purchase$storeArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type purchaseSelectScalar = {
    purchase_id?: boolean
    user_id?: boolean
    purchased_at?: boolean
    store_id?: boolean
    total_price?: boolean
    item_count?: boolean
  }

  export type purchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purchase_id" | "user_id" | "purchased_at" | "store_id" | "total_price" | "item_count", ExtArgs["result"]["purchase"]>
  export type purchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | purchase$storeArgs<ExtArgs>
  }
  export type purchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | purchase$storeArgs<ExtArgs>
  }
  export type purchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | purchase$storeArgs<ExtArgs>
  }

  export type $purchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "purchase"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      store: Prisma.$storePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      purchase_id: number
      user_id: number
      purchased_at: Date
      store_id: number | null
      total_price: Prisma.Decimal
      item_count: number
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type purchaseGetPayload<S extends boolean | null | undefined | purchaseDefaultArgs> = $Result.GetResult<Prisma.$purchasePayload, S>

  type purchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<purchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface purchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['purchase'], meta: { name: 'purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {purchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends purchaseFindUniqueArgs>(args: SelectSubset<T, purchaseFindUniqueArgs<ExtArgs>>): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {purchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends purchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, purchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends purchaseFindFirstArgs>(args?: SelectSubset<T, purchaseFindFirstArgs<ExtArgs>>): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends purchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, purchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `purchase_id`
     * const purchaseWithPurchase_idOnly = await prisma.purchase.findMany({ select: { purchase_id: true } })
     * 
     */
    findMany<T extends purchaseFindManyArgs>(args?: SelectSubset<T, purchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {purchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends purchaseCreateArgs>(args: SelectSubset<T, purchaseCreateArgs<ExtArgs>>): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {purchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends purchaseCreateManyArgs>(args?: SelectSubset<T, purchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {purchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `purchase_id`
     * const purchaseWithPurchase_idOnly = await prisma.purchase.createManyAndReturn({
     *   select: { purchase_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends purchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, purchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {purchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends purchaseDeleteArgs>(args: SelectSubset<T, purchaseDeleteArgs<ExtArgs>>): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {purchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends purchaseUpdateArgs>(args: SelectSubset<T, purchaseUpdateArgs<ExtArgs>>): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {purchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends purchaseDeleteManyArgs>(args?: SelectSubset<T, purchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends purchaseUpdateManyArgs>(args: SelectSubset<T, purchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {purchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `purchase_id`
     * const purchaseWithPurchase_idOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { purchase_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends purchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, purchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {purchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends purchaseUpsertArgs>(args: SelectSubset<T, purchaseUpsertArgs<ExtArgs>>): Prisma__purchaseClient<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends purchaseCountArgs>(
      args?: Subset<T, purchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends purchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: purchaseGroupByArgs['orderBy'] }
        : { orderBy?: purchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, purchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the purchase model
   */
  readonly fields: purchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__purchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends purchase$storeArgs<ExtArgs> = {}>(args?: Subset<T, purchase$storeArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the purchase model
   */
  interface purchaseFieldRefs {
    readonly purchase_id: FieldRef<"purchase", 'Int'>
    readonly user_id: FieldRef<"purchase", 'Int'>
    readonly purchased_at: FieldRef<"purchase", 'DateTime'>
    readonly store_id: FieldRef<"purchase", 'Int'>
    readonly total_price: FieldRef<"purchase", 'Decimal'>
    readonly item_count: FieldRef<"purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * purchase findUnique
   */
  export type purchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * Filter, which purchase to fetch.
     */
    where: purchaseWhereUniqueInput
  }

  /**
   * purchase findUniqueOrThrow
   */
  export type purchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * Filter, which purchase to fetch.
     */
    where: purchaseWhereUniqueInput
  }

  /**
   * purchase findFirst
   */
  export type purchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * Filter, which purchase to fetch.
     */
    where?: purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchases.
     */
    cursor?: purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * purchase findFirstOrThrow
   */
  export type purchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * Filter, which purchase to fetch.
     */
    where?: purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchases.
     */
    cursor?: purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * purchase findMany
   */
  export type purchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where?: purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing purchases.
     */
    cursor?: purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * purchase create
   */
  export type purchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a purchase.
     */
    data: XOR<purchaseCreateInput, purchaseUncheckedCreateInput>
  }

  /**
   * purchase createMany
   */
  export type purchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many purchases.
     */
    data: purchaseCreateManyInput | purchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * purchase createManyAndReturn
   */
  export type purchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * The data used to create many purchases.
     */
    data: purchaseCreateManyInput | purchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchase update
   */
  export type purchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a purchase.
     */
    data: XOR<purchaseUpdateInput, purchaseUncheckedUpdateInput>
    /**
     * Choose, which purchase to update.
     */
    where: purchaseWhereUniqueInput
  }

  /**
   * purchase updateMany
   */
  export type purchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update purchases.
     */
    data: XOR<purchaseUpdateManyMutationInput, purchaseUncheckedUpdateManyInput>
    /**
     * Filter which purchases to update
     */
    where?: purchaseWhereInput
    /**
     * Limit how many purchases to update.
     */
    limit?: number
  }

  /**
   * purchase updateManyAndReturn
   */
  export type purchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * The data used to update purchases.
     */
    data: XOR<purchaseUpdateManyMutationInput, purchaseUncheckedUpdateManyInput>
    /**
     * Filter which purchases to update
     */
    where?: purchaseWhereInput
    /**
     * Limit how many purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchase upsert
   */
  export type purchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the purchase to update in case it exists.
     */
    where: purchaseWhereUniqueInput
    /**
     * In case the purchase found by the `where` argument doesn't exist, create a new purchase with this data.
     */
    create: XOR<purchaseCreateInput, purchaseUncheckedCreateInput>
    /**
     * In case the purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<purchaseUpdateInput, purchaseUncheckedUpdateInput>
  }

  /**
   * purchase delete
   */
  export type purchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    /**
     * Filter which purchase to delete.
     */
    where: purchaseWhereUniqueInput
  }

  /**
   * purchase deleteMany
   */
  export type purchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchases to delete
     */
    where?: purchaseWhereInput
    /**
     * Limit how many purchases to delete.
     */
    limit?: number
  }

  /**
   * purchase.store
   */
  export type purchase$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    where?: storeWhereInput
  }

  /**
   * purchase without action
   */
  export type purchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
  }


  /**
   * Model purchase_item
   */

  export type AggregatePurchase_item = {
    _count: Purchase_itemCountAggregateOutputType | null
    _avg: Purchase_itemAvgAggregateOutputType | null
    _sum: Purchase_itemSumAggregateOutputType | null
    _min: Purchase_itemMinAggregateOutputType | null
    _max: Purchase_itemMaxAggregateOutputType | null
  }

  export type Purchase_itemAvgAggregateOutputType = {
    purchase_item_id: number | null
    purchase_id: number | null
    item_id: number | null
    item_total_price: Decimal | null
    amount: number | null
  }

  export type Purchase_itemSumAggregateOutputType = {
    purchase_item_id: number | null
    purchase_id: number | null
    item_id: number | null
    item_total_price: Decimal | null
    amount: number | null
  }

  export type Purchase_itemMinAggregateOutputType = {
    purchase_item_id: number | null
    purchase_id: number | null
    item_id: number | null
    item_total_price: Decimal | null
    amount: number | null
    item_name: string | null
  }

  export type Purchase_itemMaxAggregateOutputType = {
    purchase_item_id: number | null
    purchase_id: number | null
    item_id: number | null
    item_total_price: Decimal | null
    amount: number | null
    item_name: string | null
  }

  export type Purchase_itemCountAggregateOutputType = {
    purchase_item_id: number
    purchase_id: number
    item_id: number
    item_total_price: number
    amount: number
    item_name: number
    _all: number
  }


  export type Purchase_itemAvgAggregateInputType = {
    purchase_item_id?: true
    purchase_id?: true
    item_id?: true
    item_total_price?: true
    amount?: true
  }

  export type Purchase_itemSumAggregateInputType = {
    purchase_item_id?: true
    purchase_id?: true
    item_id?: true
    item_total_price?: true
    amount?: true
  }

  export type Purchase_itemMinAggregateInputType = {
    purchase_item_id?: true
    purchase_id?: true
    item_id?: true
    item_total_price?: true
    amount?: true
    item_name?: true
  }

  export type Purchase_itemMaxAggregateInputType = {
    purchase_item_id?: true
    purchase_id?: true
    item_id?: true
    item_total_price?: true
    amount?: true
    item_name?: true
  }

  export type Purchase_itemCountAggregateInputType = {
    purchase_item_id?: true
    purchase_id?: true
    item_id?: true
    item_total_price?: true
    amount?: true
    item_name?: true
    _all?: true
  }

  export type Purchase_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchase_item to aggregate.
     */
    where?: purchase_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_items to fetch.
     */
    orderBy?: purchase_itemOrderByWithRelationInput | purchase_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: purchase_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned purchase_items
    **/
    _count?: true | Purchase_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Purchase_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Purchase_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Purchase_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Purchase_itemMaxAggregateInputType
  }

  export type GetPurchase_itemAggregateType<T extends Purchase_itemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase_item[P]>
      : GetScalarType<T[P], AggregatePurchase_item[P]>
  }




  export type purchase_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_itemWhereInput
    orderBy?: purchase_itemOrderByWithAggregationInput | purchase_itemOrderByWithAggregationInput[]
    by: Purchase_itemScalarFieldEnum[] | Purchase_itemScalarFieldEnum
    having?: purchase_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Purchase_itemCountAggregateInputType | true
    _avg?: Purchase_itemAvgAggregateInputType
    _sum?: Purchase_itemSumAggregateInputType
    _min?: Purchase_itemMinAggregateInputType
    _max?: Purchase_itemMaxAggregateInputType
  }

  export type Purchase_itemGroupByOutputType = {
    purchase_item_id: number
    purchase_id: number
    item_id: number | null
    item_total_price: Decimal
    amount: number
    item_name: string | null
    _count: Purchase_itemCountAggregateOutputType | null
    _avg: Purchase_itemAvgAggregateOutputType | null
    _sum: Purchase_itemSumAggregateOutputType | null
    _min: Purchase_itemMinAggregateOutputType | null
    _max: Purchase_itemMaxAggregateOutputType | null
  }

  type GetPurchase_itemGroupByPayload<T extends purchase_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Purchase_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Purchase_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Purchase_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Purchase_itemGroupByOutputType[P]>
        }
      >
    >


  export type purchase_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_item_id?: boolean
    purchase_id?: boolean
    item_id?: boolean
    item_total_price?: boolean
    amount?: boolean
    item_name?: boolean
    item?: boolean | purchase_item$itemArgs<ExtArgs>
  }, ExtArgs["result"]["purchase_item"]>

  export type purchase_itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_item_id?: boolean
    purchase_id?: boolean
    item_id?: boolean
    item_total_price?: boolean
    amount?: boolean
    item_name?: boolean
    item?: boolean | purchase_item$itemArgs<ExtArgs>
  }, ExtArgs["result"]["purchase_item"]>

  export type purchase_itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_item_id?: boolean
    purchase_id?: boolean
    item_id?: boolean
    item_total_price?: boolean
    amount?: boolean
    item_name?: boolean
    item?: boolean | purchase_item$itemArgs<ExtArgs>
  }, ExtArgs["result"]["purchase_item"]>

  export type purchase_itemSelectScalar = {
    purchase_item_id?: boolean
    purchase_id?: boolean
    item_id?: boolean
    item_total_price?: boolean
    amount?: boolean
    item_name?: boolean
  }

  export type purchase_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purchase_item_id" | "purchase_id" | "item_id" | "item_total_price" | "amount" | "item_name", ExtArgs["result"]["purchase_item"]>
  export type purchase_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | purchase_item$itemArgs<ExtArgs>
  }
  export type purchase_itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | purchase_item$itemArgs<ExtArgs>
  }
  export type purchase_itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | purchase_item$itemArgs<ExtArgs>
  }

  export type $purchase_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "purchase_item"
    objects: {
      item: Prisma.$itemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      purchase_item_id: number
      purchase_id: number
      item_id: number | null
      item_total_price: Prisma.Decimal
      amount: number
      item_name: string | null
    }, ExtArgs["result"]["purchase_item"]>
    composites: {}
  }

  type purchase_itemGetPayload<S extends boolean | null | undefined | purchase_itemDefaultArgs> = $Result.GetResult<Prisma.$purchase_itemPayload, S>

  type purchase_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<purchase_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Purchase_itemCountAggregateInputType | true
    }

  export interface purchase_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['purchase_item'], meta: { name: 'purchase_item' } }
    /**
     * Find zero or one Purchase_item that matches the filter.
     * @param {purchase_itemFindUniqueArgs} args - Arguments to find a Purchase_item
     * @example
     * // Get one Purchase_item
     * const purchase_item = await prisma.purchase_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends purchase_itemFindUniqueArgs>(args: SelectSubset<T, purchase_itemFindUniqueArgs<ExtArgs>>): Prisma__purchase_itemClient<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {purchase_itemFindUniqueOrThrowArgs} args - Arguments to find a Purchase_item
     * @example
     * // Get one Purchase_item
     * const purchase_item = await prisma.purchase_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends purchase_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, purchase_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__purchase_itemClient<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemFindFirstArgs} args - Arguments to find a Purchase_item
     * @example
     * // Get one Purchase_item
     * const purchase_item = await prisma.purchase_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends purchase_itemFindFirstArgs>(args?: SelectSubset<T, purchase_itemFindFirstArgs<ExtArgs>>): Prisma__purchase_itemClient<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemFindFirstOrThrowArgs} args - Arguments to find a Purchase_item
     * @example
     * // Get one Purchase_item
     * const purchase_item = await prisma.purchase_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends purchase_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, purchase_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__purchase_itemClient<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchase_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchase_items
     * const purchase_items = await prisma.purchase_item.findMany()
     * 
     * // Get first 10 Purchase_items
     * const purchase_items = await prisma.purchase_item.findMany({ take: 10 })
     * 
     * // Only select the `purchase_item_id`
     * const purchase_itemWithPurchase_item_idOnly = await prisma.purchase_item.findMany({ select: { purchase_item_id: true } })
     * 
     */
    findMany<T extends purchase_itemFindManyArgs>(args?: SelectSubset<T, purchase_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase_item.
     * @param {purchase_itemCreateArgs} args - Arguments to create a Purchase_item.
     * @example
     * // Create one Purchase_item
     * const Purchase_item = await prisma.purchase_item.create({
     *   data: {
     *     // ... data to create a Purchase_item
     *   }
     * })
     * 
     */
    create<T extends purchase_itemCreateArgs>(args: SelectSubset<T, purchase_itemCreateArgs<ExtArgs>>): Prisma__purchase_itemClient<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchase_items.
     * @param {purchase_itemCreateManyArgs} args - Arguments to create many Purchase_items.
     * @example
     * // Create many Purchase_items
     * const purchase_item = await prisma.purchase_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends purchase_itemCreateManyArgs>(args?: SelectSubset<T, purchase_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchase_items and returns the data saved in the database.
     * @param {purchase_itemCreateManyAndReturnArgs} args - Arguments to create many Purchase_items.
     * @example
     * // Create many Purchase_items
     * const purchase_item = await prisma.purchase_item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchase_items and only return the `purchase_item_id`
     * const purchase_itemWithPurchase_item_idOnly = await prisma.purchase_item.createManyAndReturn({
     *   select: { purchase_item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends purchase_itemCreateManyAndReturnArgs>(args?: SelectSubset<T, purchase_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase_item.
     * @param {purchase_itemDeleteArgs} args - Arguments to delete one Purchase_item.
     * @example
     * // Delete one Purchase_item
     * const Purchase_item = await prisma.purchase_item.delete({
     *   where: {
     *     // ... filter to delete one Purchase_item
     *   }
     * })
     * 
     */
    delete<T extends purchase_itemDeleteArgs>(args: SelectSubset<T, purchase_itemDeleteArgs<ExtArgs>>): Prisma__purchase_itemClient<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase_item.
     * @param {purchase_itemUpdateArgs} args - Arguments to update one Purchase_item.
     * @example
     * // Update one Purchase_item
     * const purchase_item = await prisma.purchase_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends purchase_itemUpdateArgs>(args: SelectSubset<T, purchase_itemUpdateArgs<ExtArgs>>): Prisma__purchase_itemClient<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchase_items.
     * @param {purchase_itemDeleteManyArgs} args - Arguments to filter Purchase_items to delete.
     * @example
     * // Delete a few Purchase_items
     * const { count } = await prisma.purchase_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends purchase_itemDeleteManyArgs>(args?: SelectSubset<T, purchase_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchase_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchase_items
     * const purchase_item = await prisma.purchase_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends purchase_itemUpdateManyArgs>(args: SelectSubset<T, purchase_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchase_items and returns the data updated in the database.
     * @param {purchase_itemUpdateManyAndReturnArgs} args - Arguments to update many Purchase_items.
     * @example
     * // Update many Purchase_items
     * const purchase_item = await prisma.purchase_item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchase_items and only return the `purchase_item_id`
     * const purchase_itemWithPurchase_item_idOnly = await prisma.purchase_item.updateManyAndReturn({
     *   select: { purchase_item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends purchase_itemUpdateManyAndReturnArgs>(args: SelectSubset<T, purchase_itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase_item.
     * @param {purchase_itemUpsertArgs} args - Arguments to update or create a Purchase_item.
     * @example
     * // Update or create a Purchase_item
     * const purchase_item = await prisma.purchase_item.upsert({
     *   create: {
     *     // ... data to create a Purchase_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase_item we want to update
     *   }
     * })
     */
    upsert<T extends purchase_itemUpsertArgs>(args: SelectSubset<T, purchase_itemUpsertArgs<ExtArgs>>): Prisma__purchase_itemClient<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchase_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemCountArgs} args - Arguments to filter Purchase_items to count.
     * @example
     * // Count the number of Purchase_items
     * const count = await prisma.purchase_item.count({
     *   where: {
     *     // ... the filter for the Purchase_items we want to count
     *   }
     * })
    **/
    count<T extends purchase_itemCountArgs>(
      args?: Subset<T, purchase_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Purchase_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Purchase_itemAggregateArgs>(args: Subset<T, Purchase_itemAggregateArgs>): Prisma.PrismaPromise<GetPurchase_itemAggregateType<T>>

    /**
     * Group by Purchase_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends purchase_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: purchase_itemGroupByArgs['orderBy'] }
        : { orderBy?: purchase_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, purchase_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchase_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the purchase_item model
   */
  readonly fields: purchase_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for purchase_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__purchase_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends purchase_item$itemArgs<ExtArgs> = {}>(args?: Subset<T, purchase_item$itemArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the purchase_item model
   */
  interface purchase_itemFieldRefs {
    readonly purchase_item_id: FieldRef<"purchase_item", 'Int'>
    readonly purchase_id: FieldRef<"purchase_item", 'Int'>
    readonly item_id: FieldRef<"purchase_item", 'Int'>
    readonly item_total_price: FieldRef<"purchase_item", 'Decimal'>
    readonly amount: FieldRef<"purchase_item", 'Int'>
    readonly item_name: FieldRef<"purchase_item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * purchase_item findUnique
   */
  export type purchase_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * Filter, which purchase_item to fetch.
     */
    where: purchase_itemWhereUniqueInput
  }

  /**
   * purchase_item findUniqueOrThrow
   */
  export type purchase_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * Filter, which purchase_item to fetch.
     */
    where: purchase_itemWhereUniqueInput
  }

  /**
   * purchase_item findFirst
   */
  export type purchase_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * Filter, which purchase_item to fetch.
     */
    where?: purchase_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_items to fetch.
     */
    orderBy?: purchase_itemOrderByWithRelationInput | purchase_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchase_items.
     */
    cursor?: purchase_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchase_items.
     */
    distinct?: Purchase_itemScalarFieldEnum | Purchase_itemScalarFieldEnum[]
  }

  /**
   * purchase_item findFirstOrThrow
   */
  export type purchase_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * Filter, which purchase_item to fetch.
     */
    where?: purchase_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_items to fetch.
     */
    orderBy?: purchase_itemOrderByWithRelationInput | purchase_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchase_items.
     */
    cursor?: purchase_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchase_items.
     */
    distinct?: Purchase_itemScalarFieldEnum | Purchase_itemScalarFieldEnum[]
  }

  /**
   * purchase_item findMany
   */
  export type purchase_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * Filter, which purchase_items to fetch.
     */
    where?: purchase_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_items to fetch.
     */
    orderBy?: purchase_itemOrderByWithRelationInput | purchase_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing purchase_items.
     */
    cursor?: purchase_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchase_items.
     */
    distinct?: Purchase_itemScalarFieldEnum | Purchase_itemScalarFieldEnum[]
  }

  /**
   * purchase_item create
   */
  export type purchase_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a purchase_item.
     */
    data: XOR<purchase_itemCreateInput, purchase_itemUncheckedCreateInput>
  }

  /**
   * purchase_item createMany
   */
  export type purchase_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many purchase_items.
     */
    data: purchase_itemCreateManyInput | purchase_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * purchase_item createManyAndReturn
   */
  export type purchase_itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * The data used to create many purchase_items.
     */
    data: purchase_itemCreateManyInput | purchase_itemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchase_item update
   */
  export type purchase_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a purchase_item.
     */
    data: XOR<purchase_itemUpdateInput, purchase_itemUncheckedUpdateInput>
    /**
     * Choose, which purchase_item to update.
     */
    where: purchase_itemWhereUniqueInput
  }

  /**
   * purchase_item updateMany
   */
  export type purchase_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update purchase_items.
     */
    data: XOR<purchase_itemUpdateManyMutationInput, purchase_itemUncheckedUpdateManyInput>
    /**
     * Filter which purchase_items to update
     */
    where?: purchase_itemWhereInput
    /**
     * Limit how many purchase_items to update.
     */
    limit?: number
  }

  /**
   * purchase_item updateManyAndReturn
   */
  export type purchase_itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * The data used to update purchase_items.
     */
    data: XOR<purchase_itemUpdateManyMutationInput, purchase_itemUncheckedUpdateManyInput>
    /**
     * Filter which purchase_items to update
     */
    where?: purchase_itemWhereInput
    /**
     * Limit how many purchase_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchase_item upsert
   */
  export type purchase_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the purchase_item to update in case it exists.
     */
    where: purchase_itemWhereUniqueInput
    /**
     * In case the purchase_item found by the `where` argument doesn't exist, create a new purchase_item with this data.
     */
    create: XOR<purchase_itemCreateInput, purchase_itemUncheckedCreateInput>
    /**
     * In case the purchase_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<purchase_itemUpdateInput, purchase_itemUncheckedUpdateInput>
  }

  /**
   * purchase_item delete
   */
  export type purchase_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    /**
     * Filter which purchase_item to delete.
     */
    where: purchase_itemWhereUniqueInput
  }

  /**
   * purchase_item deleteMany
   */
  export type purchase_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchase_items to delete
     */
    where?: purchase_itemWhereInput
    /**
     * Limit how many purchase_items to delete.
     */
    limit?: number
  }

  /**
   * purchase_item.item
   */
  export type purchase_item$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
  }

  /**
   * purchase_item without action
   */
  export type purchase_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
  }


  /**
   * Model item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    item_id: number | null
    item_type_id: number | null
    country_id: number | null
    value: Decimal | null
    item_producer_id: number | null
  }

  export type ItemSumAggregateOutputType = {
    item_id: number | null
    item_type_id: number | null
    country_id: number | null
    value: Decimal | null
    item_producer_id: number | null
  }

  export type ItemMinAggregateOutputType = {
    item_id: number | null
    name: string | null
    item_type_id: number | null
    country_id: number | null
    value: Decimal | null
    unit: string | null
    item_producer_id: number | null
    created_at: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    item_id: number | null
    name: string | null
    item_type_id: number | null
    country_id: number | null
    value: Decimal | null
    unit: string | null
    item_producer_id: number | null
    created_at: Date | null
  }

  export type ItemCountAggregateOutputType = {
    item_id: number
    name: number
    item_type_id: number
    country_id: number
    value: number
    unit: number
    item_producer_id: number
    created_at: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    item_id?: true
    item_type_id?: true
    country_id?: true
    value?: true
    item_producer_id?: true
  }

  export type ItemSumAggregateInputType = {
    item_id?: true
    item_type_id?: true
    country_id?: true
    value?: true
    item_producer_id?: true
  }

  export type ItemMinAggregateInputType = {
    item_id?: true
    name?: true
    item_type_id?: true
    country_id?: true
    value?: true
    unit?: true
    item_producer_id?: true
    created_at?: true
  }

  export type ItemMaxAggregateInputType = {
    item_id?: true
    name?: true
    item_type_id?: true
    country_id?: true
    value?: true
    unit?: true
    item_producer_id?: true
    created_at?: true
  }

  export type ItemCountAggregateInputType = {
    item_id?: true
    name?: true
    item_type_id?: true
    country_id?: true
    value?: true
    unit?: true
    item_producer_id?: true
    created_at?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item to aggregate.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
    orderBy?: itemOrderByWithAggregationInput | itemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    item_id: number
    name: string
    item_type_id: number | null
    country_id: number | null
    value: Decimal
    unit: string
    item_producer_id: number | null
    created_at: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    name?: boolean
    item_type_id?: boolean
    country_id?: boolean
    value?: boolean
    unit?: boolean
    item_producer_id?: boolean
    created_at?: boolean
    item_type?: boolean | item$item_typeArgs<ExtArgs>
    country?: boolean | item$countryArgs<ExtArgs>
    item_producer?: boolean | item$item_producerArgs<ExtArgs>
    purchaseItems?: boolean | item$purchaseItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    name?: boolean
    item_type_id?: boolean
    country_id?: boolean
    value?: boolean
    unit?: boolean
    item_producer_id?: boolean
    created_at?: boolean
    item_type?: boolean | item$item_typeArgs<ExtArgs>
    country?: boolean | item$countryArgs<ExtArgs>
    item_producer?: boolean | item$item_producerArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    name?: boolean
    item_type_id?: boolean
    country_id?: boolean
    value?: boolean
    unit?: boolean
    item_producer_id?: boolean
    created_at?: boolean
    item_type?: boolean | item$item_typeArgs<ExtArgs>
    country?: boolean | item$countryArgs<ExtArgs>
    item_producer?: boolean | item$item_producerArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type itemSelectScalar = {
    item_id?: boolean
    name?: boolean
    item_type_id?: boolean
    country_id?: boolean
    value?: boolean
    unit?: boolean
    item_producer_id?: boolean
    created_at?: boolean
  }

  export type itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "name" | "item_type_id" | "country_id" | "value" | "unit" | "item_producer_id" | "created_at", ExtArgs["result"]["item"]>
  export type itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_type?: boolean | item$item_typeArgs<ExtArgs>
    country?: boolean | item$countryArgs<ExtArgs>
    item_producer?: boolean | item$item_producerArgs<ExtArgs>
    purchaseItems?: boolean | item$purchaseItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_type?: boolean | item$item_typeArgs<ExtArgs>
    country?: boolean | item$countryArgs<ExtArgs>
    item_producer?: boolean | item$item_producerArgs<ExtArgs>
  }
  export type itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_type?: boolean | item$item_typeArgs<ExtArgs>
    country?: boolean | item$countryArgs<ExtArgs>
    item_producer?: boolean | item$item_producerArgs<ExtArgs>
  }

  export type $itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item"
    objects: {
      item_type: Prisma.$item_typePayload<ExtArgs> | null
      country: Prisma.$countryPayload<ExtArgs> | null
      item_producer: Prisma.$item_producerPayload<ExtArgs> | null
      purchaseItems: Prisma.$purchase_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      item_id: number
      name: string
      item_type_id: number | null
      country_id: number | null
      value: Prisma.Decimal
      unit: string
      item_producer_id: number | null
      created_at: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type itemGetPayload<S extends boolean | null | undefined | itemDefaultArgs> = $Result.GetResult<Prisma.$itemPayload, S>

  type itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item'], meta: { name: 'item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {itemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemFindUniqueArgs>(args: SelectSubset<T, itemFindUniqueArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemFindUniqueOrThrowArgs>(args: SelectSubset<T, itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemFindFirstArgs>(args?: SelectSubset<T, itemFindFirstArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemFindFirstOrThrowArgs>(args?: SelectSubset<T, itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const itemWithItem_idOnly = await prisma.item.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends itemFindManyArgs>(args?: SelectSubset<T, itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {itemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends itemCreateArgs>(args: SelectSubset<T, itemCreateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemCreateManyArgs>(args?: SelectSubset<T, itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {itemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `item_id`
     * const itemWithItem_idOnly = await prisma.item.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itemCreateManyAndReturnArgs>(args?: SelectSubset<T, itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {itemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends itemDeleteArgs>(args: SelectSubset<T, itemDeleteArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {itemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemUpdateArgs>(args: SelectSubset<T, itemUpdateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemDeleteManyArgs>(args?: SelectSubset<T, itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemUpdateManyArgs>(args: SelectSubset<T, itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {itemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `item_id`
     * const itemWithItem_idOnly = await prisma.item.updateManyAndReturn({
     *   select: { item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends itemUpdateManyAndReturnArgs>(args: SelectSubset<T, itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {itemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends itemUpsertArgs>(args: SelectSubset<T, itemUpsertArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemCountArgs>(
      args?: Subset<T, itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemGroupByArgs['orderBy'] }
        : { orderBy?: itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item model
   */
  readonly fields: itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item_type<T extends item$item_typeArgs<ExtArgs> = {}>(args?: Subset<T, item$item_typeArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    country<T extends item$countryArgs<ExtArgs> = {}>(args?: Subset<T, item$countryArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    item_producer<T extends item$item_producerArgs<ExtArgs> = {}>(args?: Subset<T, item$item_producerArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    purchaseItems<T extends item$purchaseItemsArgs<ExtArgs> = {}>(args?: Subset<T, item$purchaseItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the item model
   */
  interface itemFieldRefs {
    readonly item_id: FieldRef<"item", 'Int'>
    readonly name: FieldRef<"item", 'String'>
    readonly item_type_id: FieldRef<"item", 'Int'>
    readonly country_id: FieldRef<"item", 'Int'>
    readonly value: FieldRef<"item", 'Decimal'>
    readonly unit: FieldRef<"item", 'String'>
    readonly item_producer_id: FieldRef<"item", 'Int'>
    readonly created_at: FieldRef<"item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * item findUnique
   */
  export type itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findUniqueOrThrow
   */
  export type itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findFirst
   */
  export type itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findFirstOrThrow
   */
  export type itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findMany
   */
  export type itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item create
   */
  export type itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to create a item.
     */
    data: XOR<itemCreateInput, itemUncheckedCreateInput>
  }

  /**
   * item createMany
   */
  export type itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item createManyAndReturn
   */
  export type itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * item update
   */
  export type itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to update a item.
     */
    data: XOR<itemUpdateInput, itemUncheckedUpdateInput>
    /**
     * Choose, which item to update.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item updateMany
   */
  export type itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * item updateManyAndReturn
   */
  export type itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * item upsert
   */
  export type itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The filter to search for the item to update in case it exists.
     */
    where: itemWhereUniqueInput
    /**
     * In case the item found by the `where` argument doesn't exist, create a new item with this data.
     */
    create: XOR<itemCreateInput, itemUncheckedCreateInput>
    /**
     * In case the item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemUpdateInput, itemUncheckedUpdateInput>
  }

  /**
   * item delete
   */
  export type itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter which item to delete.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item deleteMany
   */
  export type itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * item.item_type
   */
  export type item$item_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    where?: item_typeWhereInput
  }

  /**
   * item.country
   */
  export type item$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    where?: countryWhereInput
  }

  /**
   * item.item_producer
   */
  export type item$item_producerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    where?: item_producerWhereInput
  }

  /**
   * item.purchaseItems
   */
  export type item$purchaseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_item
     */
    select?: purchase_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_item
     */
    omit?: purchase_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemInclude<ExtArgs> | null
    where?: purchase_itemWhereInput
    orderBy?: purchase_itemOrderByWithRelationInput | purchase_itemOrderByWithRelationInput[]
    cursor?: purchase_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Purchase_itemScalarFieldEnum | Purchase_itemScalarFieldEnum[]
  }

  /**
   * item without action
   */
  export type itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
  }


  /**
   * Model item_producer
   */

  export type AggregateItem_producer = {
    _count: Item_producerCountAggregateOutputType | null
    _avg: Item_producerAvgAggregateOutputType | null
    _sum: Item_producerSumAggregateOutputType | null
    _min: Item_producerMinAggregateOutputType | null
    _max: Item_producerMaxAggregateOutputType | null
  }

  export type Item_producerAvgAggregateOutputType = {
    item_producer_id: number | null
    country_id: number | null
  }

  export type Item_producerSumAggregateOutputType = {
    item_producer_id: number | null
    country_id: number | null
  }

  export type Item_producerMinAggregateOutputType = {
    item_producer_id: number | null
    item_producer_name: string | null
    country_id: number | null
  }

  export type Item_producerMaxAggregateOutputType = {
    item_producer_id: number | null
    item_producer_name: string | null
    country_id: number | null
  }

  export type Item_producerCountAggregateOutputType = {
    item_producer_id: number
    item_producer_name: number
    country_id: number
    _all: number
  }


  export type Item_producerAvgAggregateInputType = {
    item_producer_id?: true
    country_id?: true
  }

  export type Item_producerSumAggregateInputType = {
    item_producer_id?: true
    country_id?: true
  }

  export type Item_producerMinAggregateInputType = {
    item_producer_id?: true
    item_producer_name?: true
    country_id?: true
  }

  export type Item_producerMaxAggregateInputType = {
    item_producer_id?: true
    item_producer_name?: true
    country_id?: true
  }

  export type Item_producerCountAggregateInputType = {
    item_producer_id?: true
    item_producer_name?: true
    country_id?: true
    _all?: true
  }

  export type Item_producerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_producer to aggregate.
     */
    where?: item_producerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_producers to fetch.
     */
    orderBy?: item_producerOrderByWithRelationInput | item_producerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: item_producerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned item_producers
    **/
    _count?: true | Item_producerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_producerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_producerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_producerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_producerMaxAggregateInputType
  }

  export type GetItem_producerAggregateType<T extends Item_producerAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_producer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_producer[P]>
      : GetScalarType<T[P], AggregateItem_producer[P]>
  }




  export type item_producerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_producerWhereInput
    orderBy?: item_producerOrderByWithAggregationInput | item_producerOrderByWithAggregationInput[]
    by: Item_producerScalarFieldEnum[] | Item_producerScalarFieldEnum
    having?: item_producerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_producerCountAggregateInputType | true
    _avg?: Item_producerAvgAggregateInputType
    _sum?: Item_producerSumAggregateInputType
    _min?: Item_producerMinAggregateInputType
    _max?: Item_producerMaxAggregateInputType
  }

  export type Item_producerGroupByOutputType = {
    item_producer_id: number
    item_producer_name: string
    country_id: number | null
    _count: Item_producerCountAggregateOutputType | null
    _avg: Item_producerAvgAggregateOutputType | null
    _sum: Item_producerSumAggregateOutputType | null
    _min: Item_producerMinAggregateOutputType | null
    _max: Item_producerMaxAggregateOutputType | null
  }

  type GetItem_producerGroupByPayload<T extends item_producerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_producerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_producerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_producerGroupByOutputType[P]>
            : GetScalarType<T[P], Item_producerGroupByOutputType[P]>
        }
      >
    >


  export type item_producerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_producer_id?: boolean
    item_producer_name?: boolean
    country_id?: boolean
    country?: boolean | item_producer$countryArgs<ExtArgs>
    items?: boolean | item_producer$itemsArgs<ExtArgs>
    _count?: boolean | Item_producerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_producer"]>

  export type item_producerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_producer_id?: boolean
    item_producer_name?: boolean
    country_id?: boolean
    country?: boolean | item_producer$countryArgs<ExtArgs>
  }, ExtArgs["result"]["item_producer"]>

  export type item_producerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_producer_id?: boolean
    item_producer_name?: boolean
    country_id?: boolean
    country?: boolean | item_producer$countryArgs<ExtArgs>
  }, ExtArgs["result"]["item_producer"]>

  export type item_producerSelectScalar = {
    item_producer_id?: boolean
    item_producer_name?: boolean
    country_id?: boolean
  }

  export type item_producerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_producer_id" | "item_producer_name" | "country_id", ExtArgs["result"]["item_producer"]>
  export type item_producerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | item_producer$countryArgs<ExtArgs>
    items?: boolean | item_producer$itemsArgs<ExtArgs>
    _count?: boolean | Item_producerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type item_producerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | item_producer$countryArgs<ExtArgs>
  }
  export type item_producerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | item_producer$countryArgs<ExtArgs>
  }

  export type $item_producerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item_producer"
    objects: {
      country: Prisma.$countryPayload<ExtArgs> | null
      items: Prisma.$itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      item_producer_id: number
      item_producer_name: string
      country_id: number | null
    }, ExtArgs["result"]["item_producer"]>
    composites: {}
  }

  type item_producerGetPayload<S extends boolean | null | undefined | item_producerDefaultArgs> = $Result.GetResult<Prisma.$item_producerPayload, S>

  type item_producerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<item_producerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Item_producerCountAggregateInputType | true
    }

  export interface item_producerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item_producer'], meta: { name: 'item_producer' } }
    /**
     * Find zero or one Item_producer that matches the filter.
     * @param {item_producerFindUniqueArgs} args - Arguments to find a Item_producer
     * @example
     * // Get one Item_producer
     * const item_producer = await prisma.item_producer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends item_producerFindUniqueArgs>(args: SelectSubset<T, item_producerFindUniqueArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item_producer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {item_producerFindUniqueOrThrowArgs} args - Arguments to find a Item_producer
     * @example
     * // Get one Item_producer
     * const item_producer = await prisma.item_producer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends item_producerFindUniqueOrThrowArgs>(args: SelectSubset<T, item_producerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_producer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_producerFindFirstArgs} args - Arguments to find a Item_producer
     * @example
     * // Get one Item_producer
     * const item_producer = await prisma.item_producer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends item_producerFindFirstArgs>(args?: SelectSubset<T, item_producerFindFirstArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_producer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_producerFindFirstOrThrowArgs} args - Arguments to find a Item_producer
     * @example
     * // Get one Item_producer
     * const item_producer = await prisma.item_producer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends item_producerFindFirstOrThrowArgs>(args?: SelectSubset<T, item_producerFindFirstOrThrowArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Item_producers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_producerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_producers
     * const item_producers = await prisma.item_producer.findMany()
     * 
     * // Get first 10 Item_producers
     * const item_producers = await prisma.item_producer.findMany({ take: 10 })
     * 
     * // Only select the `item_producer_id`
     * const item_producerWithItem_producer_idOnly = await prisma.item_producer.findMany({ select: { item_producer_id: true } })
     * 
     */
    findMany<T extends item_producerFindManyArgs>(args?: SelectSubset<T, item_producerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item_producer.
     * @param {item_producerCreateArgs} args - Arguments to create a Item_producer.
     * @example
     * // Create one Item_producer
     * const Item_producer = await prisma.item_producer.create({
     *   data: {
     *     // ... data to create a Item_producer
     *   }
     * })
     * 
     */
    create<T extends item_producerCreateArgs>(args: SelectSubset<T, item_producerCreateArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Item_producers.
     * @param {item_producerCreateManyArgs} args - Arguments to create many Item_producers.
     * @example
     * // Create many Item_producers
     * const item_producer = await prisma.item_producer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends item_producerCreateManyArgs>(args?: SelectSubset<T, item_producerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Item_producers and returns the data saved in the database.
     * @param {item_producerCreateManyAndReturnArgs} args - Arguments to create many Item_producers.
     * @example
     * // Create many Item_producers
     * const item_producer = await prisma.item_producer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Item_producers and only return the `item_producer_id`
     * const item_producerWithItem_producer_idOnly = await prisma.item_producer.createManyAndReturn({
     *   select: { item_producer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends item_producerCreateManyAndReturnArgs>(args?: SelectSubset<T, item_producerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item_producer.
     * @param {item_producerDeleteArgs} args - Arguments to delete one Item_producer.
     * @example
     * // Delete one Item_producer
     * const Item_producer = await prisma.item_producer.delete({
     *   where: {
     *     // ... filter to delete one Item_producer
     *   }
     * })
     * 
     */
    delete<T extends item_producerDeleteArgs>(args: SelectSubset<T, item_producerDeleteArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item_producer.
     * @param {item_producerUpdateArgs} args - Arguments to update one Item_producer.
     * @example
     * // Update one Item_producer
     * const item_producer = await prisma.item_producer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends item_producerUpdateArgs>(args: SelectSubset<T, item_producerUpdateArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Item_producers.
     * @param {item_producerDeleteManyArgs} args - Arguments to filter Item_producers to delete.
     * @example
     * // Delete a few Item_producers
     * const { count } = await prisma.item_producer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends item_producerDeleteManyArgs>(args?: SelectSubset<T, item_producerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_producerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_producers
     * const item_producer = await prisma.item_producer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends item_producerUpdateManyArgs>(args: SelectSubset<T, item_producerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_producers and returns the data updated in the database.
     * @param {item_producerUpdateManyAndReturnArgs} args - Arguments to update many Item_producers.
     * @example
     * // Update many Item_producers
     * const item_producer = await prisma.item_producer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Item_producers and only return the `item_producer_id`
     * const item_producerWithItem_producer_idOnly = await prisma.item_producer.updateManyAndReturn({
     *   select: { item_producer_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends item_producerUpdateManyAndReturnArgs>(args: SelectSubset<T, item_producerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item_producer.
     * @param {item_producerUpsertArgs} args - Arguments to update or create a Item_producer.
     * @example
     * // Update or create a Item_producer
     * const item_producer = await prisma.item_producer.upsert({
     *   create: {
     *     // ... data to create a Item_producer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_producer we want to update
     *   }
     * })
     */
    upsert<T extends item_producerUpsertArgs>(args: SelectSubset<T, item_producerUpsertArgs<ExtArgs>>): Prisma__item_producerClient<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Item_producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_producerCountArgs} args - Arguments to filter Item_producers to count.
     * @example
     * // Count the number of Item_producers
     * const count = await prisma.item_producer.count({
     *   where: {
     *     // ... the filter for the Item_producers we want to count
     *   }
     * })
    **/
    count<T extends item_producerCountArgs>(
      args?: Subset<T, item_producerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_producerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_producerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Item_producerAggregateArgs>(args: Subset<T, Item_producerAggregateArgs>): Prisma.PrismaPromise<GetItem_producerAggregateType<T>>

    /**
     * Group by Item_producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_producerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends item_producerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: item_producerGroupByArgs['orderBy'] }
        : { orderBy?: item_producerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, item_producerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_producerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item_producer model
   */
  readonly fields: item_producerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item_producer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__item_producerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends item_producer$countryArgs<ExtArgs> = {}>(args?: Subset<T, item_producer$countryArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends item_producer$itemsArgs<ExtArgs> = {}>(args?: Subset<T, item_producer$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the item_producer model
   */
  interface item_producerFieldRefs {
    readonly item_producer_id: FieldRef<"item_producer", 'Int'>
    readonly item_producer_name: FieldRef<"item_producer", 'String'>
    readonly country_id: FieldRef<"item_producer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * item_producer findUnique
   */
  export type item_producerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * Filter, which item_producer to fetch.
     */
    where: item_producerWhereUniqueInput
  }

  /**
   * item_producer findUniqueOrThrow
   */
  export type item_producerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * Filter, which item_producer to fetch.
     */
    where: item_producerWhereUniqueInput
  }

  /**
   * item_producer findFirst
   */
  export type item_producerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * Filter, which item_producer to fetch.
     */
    where?: item_producerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_producers to fetch.
     */
    orderBy?: item_producerOrderByWithRelationInput | item_producerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_producers.
     */
    cursor?: item_producerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_producers.
     */
    distinct?: Item_producerScalarFieldEnum | Item_producerScalarFieldEnum[]
  }

  /**
   * item_producer findFirstOrThrow
   */
  export type item_producerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * Filter, which item_producer to fetch.
     */
    where?: item_producerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_producers to fetch.
     */
    orderBy?: item_producerOrderByWithRelationInput | item_producerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_producers.
     */
    cursor?: item_producerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_producers.
     */
    distinct?: Item_producerScalarFieldEnum | Item_producerScalarFieldEnum[]
  }

  /**
   * item_producer findMany
   */
  export type item_producerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * Filter, which item_producers to fetch.
     */
    where?: item_producerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_producers to fetch.
     */
    orderBy?: item_producerOrderByWithRelationInput | item_producerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing item_producers.
     */
    cursor?: item_producerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_producers.
     */
    distinct?: Item_producerScalarFieldEnum | Item_producerScalarFieldEnum[]
  }

  /**
   * item_producer create
   */
  export type item_producerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * The data needed to create a item_producer.
     */
    data: XOR<item_producerCreateInput, item_producerUncheckedCreateInput>
  }

  /**
   * item_producer createMany
   */
  export type item_producerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many item_producers.
     */
    data: item_producerCreateManyInput | item_producerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item_producer createManyAndReturn
   */
  export type item_producerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * The data used to create many item_producers.
     */
    data: item_producerCreateManyInput | item_producerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * item_producer update
   */
  export type item_producerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * The data needed to update a item_producer.
     */
    data: XOR<item_producerUpdateInput, item_producerUncheckedUpdateInput>
    /**
     * Choose, which item_producer to update.
     */
    where: item_producerWhereUniqueInput
  }

  /**
   * item_producer updateMany
   */
  export type item_producerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update item_producers.
     */
    data: XOR<item_producerUpdateManyMutationInput, item_producerUncheckedUpdateManyInput>
    /**
     * Filter which item_producers to update
     */
    where?: item_producerWhereInput
    /**
     * Limit how many item_producers to update.
     */
    limit?: number
  }

  /**
   * item_producer updateManyAndReturn
   */
  export type item_producerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * The data used to update item_producers.
     */
    data: XOR<item_producerUpdateManyMutationInput, item_producerUncheckedUpdateManyInput>
    /**
     * Filter which item_producers to update
     */
    where?: item_producerWhereInput
    /**
     * Limit how many item_producers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * item_producer upsert
   */
  export type item_producerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * The filter to search for the item_producer to update in case it exists.
     */
    where: item_producerWhereUniqueInput
    /**
     * In case the item_producer found by the `where` argument doesn't exist, create a new item_producer with this data.
     */
    create: XOR<item_producerCreateInput, item_producerUncheckedCreateInput>
    /**
     * In case the item_producer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<item_producerUpdateInput, item_producerUncheckedUpdateInput>
  }

  /**
   * item_producer delete
   */
  export type item_producerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    /**
     * Filter which item_producer to delete.
     */
    where: item_producerWhereUniqueInput
  }

  /**
   * item_producer deleteMany
   */
  export type item_producerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_producers to delete
     */
    where?: item_producerWhereInput
    /**
     * Limit how many item_producers to delete.
     */
    limit?: number
  }

  /**
   * item_producer.country
   */
  export type item_producer$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    where?: countryWhereInput
  }

  /**
   * item_producer.items
   */
  export type item_producer$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item_producer without action
   */
  export type item_producerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
  }


  /**
   * Model item_type
   */

  export type AggregateItem_type = {
    _count: Item_typeCountAggregateOutputType | null
    _avg: Item_typeAvgAggregateOutputType | null
    _sum: Item_typeSumAggregateOutputType | null
    _min: Item_typeMinAggregateOutputType | null
    _max: Item_typeMaxAggregateOutputType | null
  }

  export type Item_typeAvgAggregateOutputType = {
    item_type_id: number | null
  }

  export type Item_typeSumAggregateOutputType = {
    item_type_id: number | null
  }

  export type Item_typeMinAggregateOutputType = {
    item_type_id: number | null
    item_type_name: string | null
  }

  export type Item_typeMaxAggregateOutputType = {
    item_type_id: number | null
    item_type_name: string | null
  }

  export type Item_typeCountAggregateOutputType = {
    item_type_id: number
    item_type_name: number
    _all: number
  }


  export type Item_typeAvgAggregateInputType = {
    item_type_id?: true
  }

  export type Item_typeSumAggregateInputType = {
    item_type_id?: true
  }

  export type Item_typeMinAggregateInputType = {
    item_type_id?: true
    item_type_name?: true
  }

  export type Item_typeMaxAggregateInputType = {
    item_type_id?: true
    item_type_name?: true
  }

  export type Item_typeCountAggregateInputType = {
    item_type_id?: true
    item_type_name?: true
    _all?: true
  }

  export type Item_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_type to aggregate.
     */
    where?: item_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_types to fetch.
     */
    orderBy?: item_typeOrderByWithRelationInput | item_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: item_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned item_types
    **/
    _count?: true | Item_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_typeMaxAggregateInputType
  }

  export type GetItem_typeAggregateType<T extends Item_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_type[P]>
      : GetScalarType<T[P], AggregateItem_type[P]>
  }




  export type item_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_typeWhereInput
    orderBy?: item_typeOrderByWithAggregationInput | item_typeOrderByWithAggregationInput[]
    by: Item_typeScalarFieldEnum[] | Item_typeScalarFieldEnum
    having?: item_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_typeCountAggregateInputType | true
    _avg?: Item_typeAvgAggregateInputType
    _sum?: Item_typeSumAggregateInputType
    _min?: Item_typeMinAggregateInputType
    _max?: Item_typeMaxAggregateInputType
  }

  export type Item_typeGroupByOutputType = {
    item_type_id: number
    item_type_name: string
    _count: Item_typeCountAggregateOutputType | null
    _avg: Item_typeAvgAggregateOutputType | null
    _sum: Item_typeSumAggregateOutputType | null
    _min: Item_typeMinAggregateOutputType | null
    _max: Item_typeMaxAggregateOutputType | null
  }

  type GetItem_typeGroupByPayload<T extends item_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Item_typeGroupByOutputType[P]>
        }
      >
    >


  export type item_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_type_id?: boolean
    item_type_name?: boolean
    items?: boolean | item_type$itemsArgs<ExtArgs>
    _count?: boolean | Item_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_type"]>

  export type item_typeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_type_id?: boolean
    item_type_name?: boolean
  }, ExtArgs["result"]["item_type"]>

  export type item_typeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_type_id?: boolean
    item_type_name?: boolean
  }, ExtArgs["result"]["item_type"]>

  export type item_typeSelectScalar = {
    item_type_id?: boolean
    item_type_name?: boolean
  }

  export type item_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_type_id" | "item_type_name", ExtArgs["result"]["item_type"]>
  export type item_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | item_type$itemsArgs<ExtArgs>
    _count?: boolean | Item_typeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type item_typeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type item_typeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $item_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item_type"
    objects: {
      items: Prisma.$itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      item_type_id: number
      item_type_name: string
    }, ExtArgs["result"]["item_type"]>
    composites: {}
  }

  type item_typeGetPayload<S extends boolean | null | undefined | item_typeDefaultArgs> = $Result.GetResult<Prisma.$item_typePayload, S>

  type item_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<item_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Item_typeCountAggregateInputType | true
    }

  export interface item_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item_type'], meta: { name: 'item_type' } }
    /**
     * Find zero or one Item_type that matches the filter.
     * @param {item_typeFindUniqueArgs} args - Arguments to find a Item_type
     * @example
     * // Get one Item_type
     * const item_type = await prisma.item_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends item_typeFindUniqueArgs>(args: SelectSubset<T, item_typeFindUniqueArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {item_typeFindUniqueOrThrowArgs} args - Arguments to find a Item_type
     * @example
     * // Get one Item_type
     * const item_type = await prisma.item_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends item_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, item_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_typeFindFirstArgs} args - Arguments to find a Item_type
     * @example
     * // Get one Item_type
     * const item_type = await prisma.item_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends item_typeFindFirstArgs>(args?: SelectSubset<T, item_typeFindFirstArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_typeFindFirstOrThrowArgs} args - Arguments to find a Item_type
     * @example
     * // Get one Item_type
     * const item_type = await prisma.item_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends item_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, item_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Item_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_types
     * const item_types = await prisma.item_type.findMany()
     * 
     * // Get first 10 Item_types
     * const item_types = await prisma.item_type.findMany({ take: 10 })
     * 
     * // Only select the `item_type_id`
     * const item_typeWithItem_type_idOnly = await prisma.item_type.findMany({ select: { item_type_id: true } })
     * 
     */
    findMany<T extends item_typeFindManyArgs>(args?: SelectSubset<T, item_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item_type.
     * @param {item_typeCreateArgs} args - Arguments to create a Item_type.
     * @example
     * // Create one Item_type
     * const Item_type = await prisma.item_type.create({
     *   data: {
     *     // ... data to create a Item_type
     *   }
     * })
     * 
     */
    create<T extends item_typeCreateArgs>(args: SelectSubset<T, item_typeCreateArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Item_types.
     * @param {item_typeCreateManyArgs} args - Arguments to create many Item_types.
     * @example
     * // Create many Item_types
     * const item_type = await prisma.item_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends item_typeCreateManyArgs>(args?: SelectSubset<T, item_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Item_types and returns the data saved in the database.
     * @param {item_typeCreateManyAndReturnArgs} args - Arguments to create many Item_types.
     * @example
     * // Create many Item_types
     * const item_type = await prisma.item_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Item_types and only return the `item_type_id`
     * const item_typeWithItem_type_idOnly = await prisma.item_type.createManyAndReturn({
     *   select: { item_type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends item_typeCreateManyAndReturnArgs>(args?: SelectSubset<T, item_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item_type.
     * @param {item_typeDeleteArgs} args - Arguments to delete one Item_type.
     * @example
     * // Delete one Item_type
     * const Item_type = await prisma.item_type.delete({
     *   where: {
     *     // ... filter to delete one Item_type
     *   }
     * })
     * 
     */
    delete<T extends item_typeDeleteArgs>(args: SelectSubset<T, item_typeDeleteArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item_type.
     * @param {item_typeUpdateArgs} args - Arguments to update one Item_type.
     * @example
     * // Update one Item_type
     * const item_type = await prisma.item_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends item_typeUpdateArgs>(args: SelectSubset<T, item_typeUpdateArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Item_types.
     * @param {item_typeDeleteManyArgs} args - Arguments to filter Item_types to delete.
     * @example
     * // Delete a few Item_types
     * const { count } = await prisma.item_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends item_typeDeleteManyArgs>(args?: SelectSubset<T, item_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_types
     * const item_type = await prisma.item_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends item_typeUpdateManyArgs>(args: SelectSubset<T, item_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_types and returns the data updated in the database.
     * @param {item_typeUpdateManyAndReturnArgs} args - Arguments to update many Item_types.
     * @example
     * // Update many Item_types
     * const item_type = await prisma.item_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Item_types and only return the `item_type_id`
     * const item_typeWithItem_type_idOnly = await prisma.item_type.updateManyAndReturn({
     *   select: { item_type_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends item_typeUpdateManyAndReturnArgs>(args: SelectSubset<T, item_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item_type.
     * @param {item_typeUpsertArgs} args - Arguments to update or create a Item_type.
     * @example
     * // Update or create a Item_type
     * const item_type = await prisma.item_type.upsert({
     *   create: {
     *     // ... data to create a Item_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_type we want to update
     *   }
     * })
     */
    upsert<T extends item_typeUpsertArgs>(args: SelectSubset<T, item_typeUpsertArgs<ExtArgs>>): Prisma__item_typeClient<$Result.GetResult<Prisma.$item_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Item_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_typeCountArgs} args - Arguments to filter Item_types to count.
     * @example
     * // Count the number of Item_types
     * const count = await prisma.item_type.count({
     *   where: {
     *     // ... the filter for the Item_types we want to count
     *   }
     * })
    **/
    count<T extends item_typeCountArgs>(
      args?: Subset<T, item_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Item_typeAggregateArgs>(args: Subset<T, Item_typeAggregateArgs>): Prisma.PrismaPromise<GetItem_typeAggregateType<T>>

    /**
     * Group by Item_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends item_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: item_typeGroupByArgs['orderBy'] }
        : { orderBy?: item_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, item_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item_type model
   */
  readonly fields: item_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__item_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends item_type$itemsArgs<ExtArgs> = {}>(args?: Subset<T, item_type$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the item_type model
   */
  interface item_typeFieldRefs {
    readonly item_type_id: FieldRef<"item_type", 'Int'>
    readonly item_type_name: FieldRef<"item_type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * item_type findUnique
   */
  export type item_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * Filter, which item_type to fetch.
     */
    where: item_typeWhereUniqueInput
  }

  /**
   * item_type findUniqueOrThrow
   */
  export type item_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * Filter, which item_type to fetch.
     */
    where: item_typeWhereUniqueInput
  }

  /**
   * item_type findFirst
   */
  export type item_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * Filter, which item_type to fetch.
     */
    where?: item_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_types to fetch.
     */
    orderBy?: item_typeOrderByWithRelationInput | item_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_types.
     */
    cursor?: item_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_types.
     */
    distinct?: Item_typeScalarFieldEnum | Item_typeScalarFieldEnum[]
  }

  /**
   * item_type findFirstOrThrow
   */
  export type item_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * Filter, which item_type to fetch.
     */
    where?: item_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_types to fetch.
     */
    orderBy?: item_typeOrderByWithRelationInput | item_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_types.
     */
    cursor?: item_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_types.
     */
    distinct?: Item_typeScalarFieldEnum | Item_typeScalarFieldEnum[]
  }

  /**
   * item_type findMany
   */
  export type item_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * Filter, which item_types to fetch.
     */
    where?: item_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_types to fetch.
     */
    orderBy?: item_typeOrderByWithRelationInput | item_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing item_types.
     */
    cursor?: item_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_types.
     */
    distinct?: Item_typeScalarFieldEnum | Item_typeScalarFieldEnum[]
  }

  /**
   * item_type create
   */
  export type item_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a item_type.
     */
    data: XOR<item_typeCreateInput, item_typeUncheckedCreateInput>
  }

  /**
   * item_type createMany
   */
  export type item_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many item_types.
     */
    data: item_typeCreateManyInput | item_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item_type createManyAndReturn
   */
  export type item_typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * The data used to create many item_types.
     */
    data: item_typeCreateManyInput | item_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item_type update
   */
  export type item_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a item_type.
     */
    data: XOR<item_typeUpdateInput, item_typeUncheckedUpdateInput>
    /**
     * Choose, which item_type to update.
     */
    where: item_typeWhereUniqueInput
  }

  /**
   * item_type updateMany
   */
  export type item_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update item_types.
     */
    data: XOR<item_typeUpdateManyMutationInput, item_typeUncheckedUpdateManyInput>
    /**
     * Filter which item_types to update
     */
    where?: item_typeWhereInput
    /**
     * Limit how many item_types to update.
     */
    limit?: number
  }

  /**
   * item_type updateManyAndReturn
   */
  export type item_typeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * The data used to update item_types.
     */
    data: XOR<item_typeUpdateManyMutationInput, item_typeUncheckedUpdateManyInput>
    /**
     * Filter which item_types to update
     */
    where?: item_typeWhereInput
    /**
     * Limit how many item_types to update.
     */
    limit?: number
  }

  /**
   * item_type upsert
   */
  export type item_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the item_type to update in case it exists.
     */
    where: item_typeWhereUniqueInput
    /**
     * In case the item_type found by the `where` argument doesn't exist, create a new item_type with this data.
     */
    create: XOR<item_typeCreateInput, item_typeUncheckedCreateInput>
    /**
     * In case the item_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<item_typeUpdateInput, item_typeUncheckedUpdateInput>
  }

  /**
   * item_type delete
   */
  export type item_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
    /**
     * Filter which item_type to delete.
     */
    where: item_typeWhereUniqueInput
  }

  /**
   * item_type deleteMany
   */
  export type item_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_types to delete
     */
    where?: item_typeWhereInput
    /**
     * Limit how many item_types to delete.
     */
    limit?: number
  }

  /**
   * item_type.items
   */
  export type item_type$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item_type without action
   */
  export type item_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_type
     */
    select?: item_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_type
     */
    omit?: item_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_typeInclude<ExtArgs> | null
  }


  /**
   * Model country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    country_id: number | null
  }

  export type CountrySumAggregateOutputType = {
    country_id: number | null
  }

  export type CountryMinAggregateOutputType = {
    country_id: number | null
    country_code: string | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    country_id: number | null
    country_code: string | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    country_id: number
    country_code: number
    name: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    country_id?: true
  }

  export type CountrySumAggregateInputType = {
    country_id?: true
  }

  export type CountryMinAggregateInputType = {
    country_id?: true
    country_code?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    country_id?: true
    country_code?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    country_id?: true
    country_code?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which country to aggregate.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type countryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: countryWhereInput
    orderBy?: countryOrderByWithAggregationInput | countryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: countryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    country_id: number
    country_code: string
    name: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends countryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type countrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    country_id?: boolean
    country_code?: boolean
    name?: boolean
    items?: boolean | country$itemsArgs<ExtArgs>
    itemProducers?: boolean | country$itemProducersArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type countrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    country_id?: boolean
    country_code?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type countrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    country_id?: boolean
    country_code?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type countrySelectScalar = {
    country_id?: boolean
    country_code?: boolean
    name?: boolean
  }

  export type countryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"country_id" | "country_code" | "name", ExtArgs["result"]["country"]>
  export type countryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | country$itemsArgs<ExtArgs>
    itemProducers?: boolean | country$itemProducersArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type countryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type countryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $countryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "country"
    objects: {
      items: Prisma.$itemPayload<ExtArgs>[]
      itemProducers: Prisma.$item_producerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      country_id: number
      country_code: string
      name: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type countryGetPayload<S extends boolean | null | undefined | countryDefaultArgs> = $Result.GetResult<Prisma.$countryPayload, S>

  type countryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<countryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface countryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['country'], meta: { name: 'country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {countryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends countryFindUniqueArgs>(args: SelectSubset<T, countryFindUniqueArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {countryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends countryFindUniqueOrThrowArgs>(args: SelectSubset<T, countryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends countryFindFirstArgs>(args?: SelectSubset<T, countryFindFirstArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends countryFindFirstOrThrowArgs>(args?: SelectSubset<T, countryFindFirstOrThrowArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `country_id`
     * const countryWithCountry_idOnly = await prisma.country.findMany({ select: { country_id: true } })
     * 
     */
    findMany<T extends countryFindManyArgs>(args?: SelectSubset<T, countryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {countryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends countryCreateArgs>(args: SelectSubset<T, countryCreateArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {countryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends countryCreateManyArgs>(args?: SelectSubset<T, countryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {countryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `country_id`
     * const countryWithCountry_idOnly = await prisma.country.createManyAndReturn({
     *   select: { country_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends countryCreateManyAndReturnArgs>(args?: SelectSubset<T, countryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {countryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends countryDeleteArgs>(args: SelectSubset<T, countryDeleteArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {countryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends countryUpdateArgs>(args: SelectSubset<T, countryUpdateArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {countryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends countryDeleteManyArgs>(args?: SelectSubset<T, countryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends countryUpdateManyArgs>(args: SelectSubset<T, countryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {countryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `country_id`
     * const countryWithCountry_idOnly = await prisma.country.updateManyAndReturn({
     *   select: { country_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends countryUpdateManyAndReturnArgs>(args: SelectSubset<T, countryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {countryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends countryUpsertArgs>(args: SelectSubset<T, countryUpsertArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countryCountArgs>(
      args?: Subset<T, countryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends countryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: countryGroupByArgs['orderBy'] }
        : { orderBy?: countryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, countryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the country model
   */
  readonly fields: countryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__countryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends country$itemsArgs<ExtArgs> = {}>(args?: Subset<T, country$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itemProducers<T extends country$itemProducersArgs<ExtArgs> = {}>(args?: Subset<T, country$itemProducersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_producerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the country model
   */
  interface countryFieldRefs {
    readonly country_id: FieldRef<"country", 'Int'>
    readonly country_code: FieldRef<"country", 'String'>
    readonly name: FieldRef<"country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * country findUnique
   */
  export type countryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country findUniqueOrThrow
   */
  export type countryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country findFirst
   */
  export type countryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country findFirstOrThrow
   */
  export type countryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country findMany
   */
  export type countryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country create
   */
  export type countryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * The data needed to create a country.
     */
    data: XOR<countryCreateInput, countryUncheckedCreateInput>
  }

  /**
   * country createMany
   */
  export type countryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many countries.
     */
    data: countryCreateManyInput | countryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * country createManyAndReturn
   */
  export type countryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * The data used to create many countries.
     */
    data: countryCreateManyInput | countryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * country update
   */
  export type countryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * The data needed to update a country.
     */
    data: XOR<countryUpdateInput, countryUncheckedUpdateInput>
    /**
     * Choose, which country to update.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country updateMany
   */
  export type countryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update countries.
     */
    data: XOR<countryUpdateManyMutationInput, countryUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countryWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * country updateManyAndReturn
   */
  export type countryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * The data used to update countries.
     */
    data: XOR<countryUpdateManyMutationInput, countryUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countryWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * country upsert
   */
  export type countryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * The filter to search for the country to update in case it exists.
     */
    where: countryWhereUniqueInput
    /**
     * In case the country found by the `where` argument doesn't exist, create a new country with this data.
     */
    create: XOR<countryCreateInput, countryUncheckedCreateInput>
    /**
     * In case the country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countryUpdateInput, countryUncheckedUpdateInput>
  }

  /**
   * country delete
   */
  export type countryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter which country to delete.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country deleteMany
   */
  export type countryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to delete
     */
    where?: countryWhereInput
    /**
     * Limit how many countries to delete.
     */
    limit?: number
  }

  /**
   * country.items
   */
  export type country$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * country.itemProducers
   */
  export type country$itemProducersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_producer
     */
    select?: item_producerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_producer
     */
    omit?: item_producerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_producerInclude<ExtArgs> | null
    where?: item_producerWhereInput
    orderBy?: item_producerOrderByWithRelationInput | item_producerOrderByWithRelationInput[]
    cursor?: item_producerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_producerScalarFieldEnum | Item_producerScalarFieldEnum[]
  }

  /**
   * country without action
   */
  export type countryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
  }


  /**
   * Model store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    store_id: number | null
    user_id: number | null
  }

  export type StoreSumAggregateOutputType = {
    store_id: number | null
    user_id: number | null
  }

  export type StoreMinAggregateOutputType = {
    store_id: number | null
    name: string | null
    user_id: number | null
    location: string | null
  }

  export type StoreMaxAggregateOutputType = {
    store_id: number | null
    name: string | null
    user_id: number | null
    location: string | null
  }

  export type StoreCountAggregateOutputType = {
    store_id: number
    name: number
    user_id: number
    location: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    store_id?: true
    user_id?: true
  }

  export type StoreSumAggregateInputType = {
    store_id?: true
    user_id?: true
  }

  export type StoreMinAggregateInputType = {
    store_id?: true
    name?: true
    user_id?: true
    location?: true
  }

  export type StoreMaxAggregateInputType = {
    store_id?: true
    name?: true
    user_id?: true
    location?: true
  }

  export type StoreCountAggregateInputType = {
    store_id?: true
    name?: true
    user_id?: true
    location?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store to aggregate.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type storeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storeWhereInput
    orderBy?: storeOrderByWithAggregationInput | storeOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: storeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    store_id: number
    name: string
    user_id: number
    location: string
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends storeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type storeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    name?: boolean
    user_id?: boolean
    location?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    purchases?: boolean | store$purchasesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type storeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    name?: boolean
    user_id?: boolean
    location?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type storeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    name?: boolean
    user_id?: boolean
    location?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type storeSelectScalar = {
    store_id?: boolean
    name?: boolean
    user_id?: boolean
    location?: boolean
  }

  export type storeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"store_id" | "name" | "user_id" | "location", ExtArgs["result"]["store"]>
  export type storeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    purchases?: boolean | store$purchasesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type storeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type storeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $storePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "store"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      purchases: Prisma.$purchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      store_id: number
      name: string
      user_id: number
      location: string
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type storeGetPayload<S extends boolean | null | undefined | storeDefaultArgs> = $Result.GetResult<Prisma.$storePayload, S>

  type storeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface storeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['store'], meta: { name: 'store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {storeFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storeFindUniqueArgs>(args: SelectSubset<T, storeFindUniqueArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storeFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storeFindUniqueOrThrowArgs>(args: SelectSubset<T, storeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storeFindFirstArgs>(args?: SelectSubset<T, storeFindFirstArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storeFindFirstOrThrowArgs>(args?: SelectSubset<T, storeFindFirstOrThrowArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `store_id`
     * const storeWithStore_idOnly = await prisma.store.findMany({ select: { store_id: true } })
     * 
     */
    findMany<T extends storeFindManyArgs>(args?: SelectSubset<T, storeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {storeCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends storeCreateArgs>(args: SelectSubset<T, storeCreateArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storeCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storeCreateManyArgs>(args?: SelectSubset<T, storeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storeCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `store_id`
     * const storeWithStore_idOnly = await prisma.store.createManyAndReturn({
     *   select: { store_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storeCreateManyAndReturnArgs>(args?: SelectSubset<T, storeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {storeDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends storeDeleteArgs>(args: SelectSubset<T, storeDeleteArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {storeUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storeUpdateArgs>(args: SelectSubset<T, storeUpdateArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storeDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storeDeleteManyArgs>(args?: SelectSubset<T, storeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storeUpdateManyArgs>(args: SelectSubset<T, storeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storeUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `store_id`
     * const storeWithStore_idOnly = await prisma.store.updateManyAndReturn({
     *   select: { store_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends storeUpdateManyAndReturnArgs>(args: SelectSubset<T, storeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {storeUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends storeUpsertArgs>(args: SelectSubset<T, storeUpsertArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storeCountArgs>(
      args?: Subset<T, storeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends storeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storeGroupByArgs['orderBy'] }
        : { orderBy?: storeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, storeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the store model
   */
  readonly fields: storeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchases<T extends store$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, store$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the store model
   */
  interface storeFieldRefs {
    readonly store_id: FieldRef<"store", 'Int'>
    readonly name: FieldRef<"store", 'String'>
    readonly user_id: FieldRef<"store", 'Int'>
    readonly location: FieldRef<"store", 'String'>
  }
    

  // Custom InputTypes
  /**
   * store findUnique
   */
  export type storeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findUniqueOrThrow
   */
  export type storeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findFirst
   */
  export type storeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store findFirstOrThrow
   */
  export type storeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store findMany
   */
  export type storeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store create
   */
  export type storeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The data needed to create a store.
     */
    data: XOR<storeCreateInput, storeUncheckedCreateInput>
  }

  /**
   * store createMany
   */
  export type storeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store createManyAndReturn
   */
  export type storeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * store update
   */
  export type storeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The data needed to update a store.
     */
    data: XOR<storeUpdateInput, storeUncheckedUpdateInput>
    /**
     * Choose, which store to update.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store updateMany
   */
  export type storeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * store updateManyAndReturn
   */
  export type storeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * store upsert
   */
  export type storeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The filter to search for the store to update in case it exists.
     */
    where: storeWhereUniqueInput
    /**
     * In case the store found by the `where` argument doesn't exist, create a new store with this data.
     */
    create: XOR<storeCreateInput, storeUncheckedCreateInput>
    /**
     * In case the store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storeUpdateInput, storeUncheckedUpdateInput>
  }

  /**
   * store delete
   */
  export type storeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter which store to delete.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store deleteMany
   */
  export type storeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * store.purchases
   */
  export type store$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase
     */
    select?: purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase
     */
    omit?: purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchaseInclude<ExtArgs> | null
    where?: purchaseWhereInput
    orderBy?: purchaseOrderByWithRelationInput | purchaseOrderByWithRelationInput[]
    cursor?: purchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * store without action
   */
  export type storeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    password_hash: 'password_hash',
    email: 'email',
    created_at: 'created_at',
    last_login: 'last_login',
    first_name: 'first_name',
    last_name: 'last_name',
    is_admin: 'is_admin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    purchase_id: 'purchase_id',
    user_id: 'user_id',
    purchased_at: 'purchased_at',
    store_id: 'store_id',
    total_price: 'total_price',
    item_count: 'item_count'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const Purchase_itemScalarFieldEnum: {
    purchase_item_id: 'purchase_item_id',
    purchase_id: 'purchase_id',
    item_id: 'item_id',
    item_total_price: 'item_total_price',
    amount: 'amount',
    item_name: 'item_name'
  };

  export type Purchase_itemScalarFieldEnum = (typeof Purchase_itemScalarFieldEnum)[keyof typeof Purchase_itemScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    item_id: 'item_id',
    name: 'name',
    item_type_id: 'item_type_id',
    country_id: 'country_id',
    value: 'value',
    unit: 'unit',
    item_producer_id: 'item_producer_id',
    created_at: 'created_at'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const Item_producerScalarFieldEnum: {
    item_producer_id: 'item_producer_id',
    item_producer_name: 'item_producer_name',
    country_id: 'country_id'
  };

  export type Item_producerScalarFieldEnum = (typeof Item_producerScalarFieldEnum)[keyof typeof Item_producerScalarFieldEnum]


  export const Item_typeScalarFieldEnum: {
    item_type_id: 'item_type_id',
    item_type_name: 'item_type_name'
  };

  export type Item_typeScalarFieldEnum = (typeof Item_typeScalarFieldEnum)[keyof typeof Item_typeScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    country_id: 'country_id',
    country_code: 'country_code',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    store_id: 'store_id',
    name: 'name',
    user_id: 'user_id',
    location: 'location'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: IntFilter<"user"> | number
    user_name?: StringFilter<"user"> | string
    password_hash?: StringFilter<"user"> | string
    email?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeFilter<"user"> | Date | string
    last_login?: DateTimeNullableFilter<"user"> | Date | string | null
    first_name?: StringNullableFilter<"user"> | string | null
    last_name?: StringNullableFilter<"user"> | string | null
    is_admin?: BoolFilter<"user"> | boolean
    purchases?: PurchaseListRelationFilter
    stores?: StoreListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    password_hash?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_login?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    is_admin?: SortOrder
    purchases?: purchaseOrderByRelationAggregateInput
    stores?: storeOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    user_name?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password_hash?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    last_login?: DateTimeNullableFilter<"user"> | Date | string | null
    first_name?: StringNullableFilter<"user"> | string | null
    last_name?: StringNullableFilter<"user"> | string | null
    is_admin?: BoolFilter<"user"> | boolean
    purchases?: PurchaseListRelationFilter
    stores?: StoreListRelationFilter
  }, "user_id" | "user_name" | "email">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    password_hash?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_login?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    is_admin?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user"> | number
    user_name?: StringWithAggregatesFilter<"user"> | string
    password_hash?: StringWithAggregatesFilter<"user"> | string
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    last_login?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    first_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    is_admin?: BoolWithAggregatesFilter<"user"> | boolean
  }

  export type purchaseWhereInput = {
    AND?: purchaseWhereInput | purchaseWhereInput[]
    OR?: purchaseWhereInput[]
    NOT?: purchaseWhereInput | purchaseWhereInput[]
    purchase_id?: IntFilter<"purchase"> | number
    user_id?: IntFilter<"purchase"> | number
    purchased_at?: DateTimeFilter<"purchase"> | Date | string
    store_id?: IntNullableFilter<"purchase"> | number | null
    total_price?: DecimalFilter<"purchase"> | Decimal | DecimalJsLike | number | string
    item_count?: IntFilter<"purchase"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    store?: XOR<StoreNullableScalarRelationFilter, storeWhereInput> | null
  }

  export type purchaseOrderByWithRelationInput = {
    purchase_id?: SortOrder
    user_id?: SortOrder
    purchased_at?: SortOrder
    store_id?: SortOrderInput | SortOrder
    total_price?: SortOrder
    item_count?: SortOrder
    user?: userOrderByWithRelationInput
    store?: storeOrderByWithRelationInput
  }

  export type purchaseWhereUniqueInput = Prisma.AtLeast<{
    purchase_id?: number
    AND?: purchaseWhereInput | purchaseWhereInput[]
    OR?: purchaseWhereInput[]
    NOT?: purchaseWhereInput | purchaseWhereInput[]
    user_id?: IntFilter<"purchase"> | number
    purchased_at?: DateTimeFilter<"purchase"> | Date | string
    store_id?: IntNullableFilter<"purchase"> | number | null
    total_price?: DecimalFilter<"purchase"> | Decimal | DecimalJsLike | number | string
    item_count?: IntFilter<"purchase"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    store?: XOR<StoreNullableScalarRelationFilter, storeWhereInput> | null
  }, "purchase_id">

  export type purchaseOrderByWithAggregationInput = {
    purchase_id?: SortOrder
    user_id?: SortOrder
    purchased_at?: SortOrder
    store_id?: SortOrderInput | SortOrder
    total_price?: SortOrder
    item_count?: SortOrder
    _count?: purchaseCountOrderByAggregateInput
    _avg?: purchaseAvgOrderByAggregateInput
    _max?: purchaseMaxOrderByAggregateInput
    _min?: purchaseMinOrderByAggregateInput
    _sum?: purchaseSumOrderByAggregateInput
  }

  export type purchaseScalarWhereWithAggregatesInput = {
    AND?: purchaseScalarWhereWithAggregatesInput | purchaseScalarWhereWithAggregatesInput[]
    OR?: purchaseScalarWhereWithAggregatesInput[]
    NOT?: purchaseScalarWhereWithAggregatesInput | purchaseScalarWhereWithAggregatesInput[]
    purchase_id?: IntWithAggregatesFilter<"purchase"> | number
    user_id?: IntWithAggregatesFilter<"purchase"> | number
    purchased_at?: DateTimeWithAggregatesFilter<"purchase"> | Date | string
    store_id?: IntNullableWithAggregatesFilter<"purchase"> | number | null
    total_price?: DecimalWithAggregatesFilter<"purchase"> | Decimal | DecimalJsLike | number | string
    item_count?: IntWithAggregatesFilter<"purchase"> | number
  }

  export type purchase_itemWhereInput = {
    AND?: purchase_itemWhereInput | purchase_itemWhereInput[]
    OR?: purchase_itemWhereInput[]
    NOT?: purchase_itemWhereInput | purchase_itemWhereInput[]
    purchase_item_id?: IntFilter<"purchase_item"> | number
    purchase_id?: IntFilter<"purchase_item"> | number
    item_id?: IntNullableFilter<"purchase_item"> | number | null
    item_total_price?: DecimalFilter<"purchase_item"> | Decimal | DecimalJsLike | number | string
    amount?: IntFilter<"purchase_item"> | number
    item_name?: StringNullableFilter<"purchase_item"> | string | null
    item?: XOR<ItemNullableScalarRelationFilter, itemWhereInput> | null
  }

  export type purchase_itemOrderByWithRelationInput = {
    purchase_item_id?: SortOrder
    purchase_id?: SortOrder
    item_id?: SortOrderInput | SortOrder
    item_total_price?: SortOrder
    amount?: SortOrder
    item_name?: SortOrderInput | SortOrder
    item?: itemOrderByWithRelationInput
  }

  export type purchase_itemWhereUniqueInput = Prisma.AtLeast<{
    purchase_item_id?: number
    AND?: purchase_itemWhereInput | purchase_itemWhereInput[]
    OR?: purchase_itemWhereInput[]
    NOT?: purchase_itemWhereInput | purchase_itemWhereInput[]
    purchase_id?: IntFilter<"purchase_item"> | number
    item_id?: IntNullableFilter<"purchase_item"> | number | null
    item_total_price?: DecimalFilter<"purchase_item"> | Decimal | DecimalJsLike | number | string
    amount?: IntFilter<"purchase_item"> | number
    item_name?: StringNullableFilter<"purchase_item"> | string | null
    item?: XOR<ItemNullableScalarRelationFilter, itemWhereInput> | null
  }, "purchase_item_id">

  export type purchase_itemOrderByWithAggregationInput = {
    purchase_item_id?: SortOrder
    purchase_id?: SortOrder
    item_id?: SortOrderInput | SortOrder
    item_total_price?: SortOrder
    amount?: SortOrder
    item_name?: SortOrderInput | SortOrder
    _count?: purchase_itemCountOrderByAggregateInput
    _avg?: purchase_itemAvgOrderByAggregateInput
    _max?: purchase_itemMaxOrderByAggregateInput
    _min?: purchase_itemMinOrderByAggregateInput
    _sum?: purchase_itemSumOrderByAggregateInput
  }

  export type purchase_itemScalarWhereWithAggregatesInput = {
    AND?: purchase_itemScalarWhereWithAggregatesInput | purchase_itemScalarWhereWithAggregatesInput[]
    OR?: purchase_itemScalarWhereWithAggregatesInput[]
    NOT?: purchase_itemScalarWhereWithAggregatesInput | purchase_itemScalarWhereWithAggregatesInput[]
    purchase_item_id?: IntWithAggregatesFilter<"purchase_item"> | number
    purchase_id?: IntWithAggregatesFilter<"purchase_item"> | number
    item_id?: IntNullableWithAggregatesFilter<"purchase_item"> | number | null
    item_total_price?: DecimalWithAggregatesFilter<"purchase_item"> | Decimal | DecimalJsLike | number | string
    amount?: IntWithAggregatesFilter<"purchase_item"> | number
    item_name?: StringNullableWithAggregatesFilter<"purchase_item"> | string | null
  }

  export type itemWhereInput = {
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    item_id?: IntFilter<"item"> | number
    name?: StringFilter<"item"> | string
    item_type_id?: IntNullableFilter<"item"> | number | null
    country_id?: IntNullableFilter<"item"> | number | null
    value?: DecimalFilter<"item"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"item"> | string
    item_producer_id?: IntNullableFilter<"item"> | number | null
    created_at?: DateTimeFilter<"item"> | Date | string
    item_type?: XOR<Item_typeNullableScalarRelationFilter, item_typeWhereInput> | null
    country?: XOR<CountryNullableScalarRelationFilter, countryWhereInput> | null
    item_producer?: XOR<Item_producerNullableScalarRelationFilter, item_producerWhereInput> | null
    purchaseItems?: Purchase_itemListRelationFilter
  }

  export type itemOrderByWithRelationInput = {
    item_id?: SortOrder
    name?: SortOrder
    item_type_id?: SortOrderInput | SortOrder
    country_id?: SortOrderInput | SortOrder
    value?: SortOrder
    unit?: SortOrder
    item_producer_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    item_type?: item_typeOrderByWithRelationInput
    country?: countryOrderByWithRelationInput
    item_producer?: item_producerOrderByWithRelationInput
    purchaseItems?: purchase_itemOrderByRelationAggregateInput
  }

  export type itemWhereUniqueInput = Prisma.AtLeast<{
    item_id?: number
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    name?: StringFilter<"item"> | string
    item_type_id?: IntNullableFilter<"item"> | number | null
    country_id?: IntNullableFilter<"item"> | number | null
    value?: DecimalFilter<"item"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"item"> | string
    item_producer_id?: IntNullableFilter<"item"> | number | null
    created_at?: DateTimeFilter<"item"> | Date | string
    item_type?: XOR<Item_typeNullableScalarRelationFilter, item_typeWhereInput> | null
    country?: XOR<CountryNullableScalarRelationFilter, countryWhereInput> | null
    item_producer?: XOR<Item_producerNullableScalarRelationFilter, item_producerWhereInput> | null
    purchaseItems?: Purchase_itemListRelationFilter
  }, "item_id">

  export type itemOrderByWithAggregationInput = {
    item_id?: SortOrder
    name?: SortOrder
    item_type_id?: SortOrderInput | SortOrder
    country_id?: SortOrderInput | SortOrder
    value?: SortOrder
    unit?: SortOrder
    item_producer_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: itemCountOrderByAggregateInput
    _avg?: itemAvgOrderByAggregateInput
    _max?: itemMaxOrderByAggregateInput
    _min?: itemMinOrderByAggregateInput
    _sum?: itemSumOrderByAggregateInput
  }

  export type itemScalarWhereWithAggregatesInput = {
    AND?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    OR?: itemScalarWhereWithAggregatesInput[]
    NOT?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    item_id?: IntWithAggregatesFilter<"item"> | number
    name?: StringWithAggregatesFilter<"item"> | string
    item_type_id?: IntNullableWithAggregatesFilter<"item"> | number | null
    country_id?: IntNullableWithAggregatesFilter<"item"> | number | null
    value?: DecimalWithAggregatesFilter<"item"> | Decimal | DecimalJsLike | number | string
    unit?: StringWithAggregatesFilter<"item"> | string
    item_producer_id?: IntNullableWithAggregatesFilter<"item"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"item"> | Date | string
  }

  export type item_producerWhereInput = {
    AND?: item_producerWhereInput | item_producerWhereInput[]
    OR?: item_producerWhereInput[]
    NOT?: item_producerWhereInput | item_producerWhereInput[]
    item_producer_id?: IntFilter<"item_producer"> | number
    item_producer_name?: StringFilter<"item_producer"> | string
    country_id?: IntNullableFilter<"item_producer"> | number | null
    country?: XOR<CountryNullableScalarRelationFilter, countryWhereInput> | null
    items?: ItemListRelationFilter
  }

  export type item_producerOrderByWithRelationInput = {
    item_producer_id?: SortOrder
    item_producer_name?: SortOrder
    country_id?: SortOrderInput | SortOrder
    country?: countryOrderByWithRelationInput
    items?: itemOrderByRelationAggregateInput
  }

  export type item_producerWhereUniqueInput = Prisma.AtLeast<{
    item_producer_id?: number
    item_producer_name?: string
    AND?: item_producerWhereInput | item_producerWhereInput[]
    OR?: item_producerWhereInput[]
    NOT?: item_producerWhereInput | item_producerWhereInput[]
    country_id?: IntNullableFilter<"item_producer"> | number | null
    country?: XOR<CountryNullableScalarRelationFilter, countryWhereInput> | null
    items?: ItemListRelationFilter
  }, "item_producer_id" | "item_producer_name">

  export type item_producerOrderByWithAggregationInput = {
    item_producer_id?: SortOrder
    item_producer_name?: SortOrder
    country_id?: SortOrderInput | SortOrder
    _count?: item_producerCountOrderByAggregateInput
    _avg?: item_producerAvgOrderByAggregateInput
    _max?: item_producerMaxOrderByAggregateInput
    _min?: item_producerMinOrderByAggregateInput
    _sum?: item_producerSumOrderByAggregateInput
  }

  export type item_producerScalarWhereWithAggregatesInput = {
    AND?: item_producerScalarWhereWithAggregatesInput | item_producerScalarWhereWithAggregatesInput[]
    OR?: item_producerScalarWhereWithAggregatesInput[]
    NOT?: item_producerScalarWhereWithAggregatesInput | item_producerScalarWhereWithAggregatesInput[]
    item_producer_id?: IntWithAggregatesFilter<"item_producer"> | number
    item_producer_name?: StringWithAggregatesFilter<"item_producer"> | string
    country_id?: IntNullableWithAggregatesFilter<"item_producer"> | number | null
  }

  export type item_typeWhereInput = {
    AND?: item_typeWhereInput | item_typeWhereInput[]
    OR?: item_typeWhereInput[]
    NOT?: item_typeWhereInput | item_typeWhereInput[]
    item_type_id?: IntFilter<"item_type"> | number
    item_type_name?: StringFilter<"item_type"> | string
    items?: ItemListRelationFilter
  }

  export type item_typeOrderByWithRelationInput = {
    item_type_id?: SortOrder
    item_type_name?: SortOrder
    items?: itemOrderByRelationAggregateInput
  }

  export type item_typeWhereUniqueInput = Prisma.AtLeast<{
    item_type_id?: number
    AND?: item_typeWhereInput | item_typeWhereInput[]
    OR?: item_typeWhereInput[]
    NOT?: item_typeWhereInput | item_typeWhereInput[]
    item_type_name?: StringFilter<"item_type"> | string
    items?: ItemListRelationFilter
  }, "item_type_id">

  export type item_typeOrderByWithAggregationInput = {
    item_type_id?: SortOrder
    item_type_name?: SortOrder
    _count?: item_typeCountOrderByAggregateInput
    _avg?: item_typeAvgOrderByAggregateInput
    _max?: item_typeMaxOrderByAggregateInput
    _min?: item_typeMinOrderByAggregateInput
    _sum?: item_typeSumOrderByAggregateInput
  }

  export type item_typeScalarWhereWithAggregatesInput = {
    AND?: item_typeScalarWhereWithAggregatesInput | item_typeScalarWhereWithAggregatesInput[]
    OR?: item_typeScalarWhereWithAggregatesInput[]
    NOT?: item_typeScalarWhereWithAggregatesInput | item_typeScalarWhereWithAggregatesInput[]
    item_type_id?: IntWithAggregatesFilter<"item_type"> | number
    item_type_name?: StringWithAggregatesFilter<"item_type"> | string
  }

  export type countryWhereInput = {
    AND?: countryWhereInput | countryWhereInput[]
    OR?: countryWhereInput[]
    NOT?: countryWhereInput | countryWhereInput[]
    country_id?: IntFilter<"country"> | number
    country_code?: StringFilter<"country"> | string
    name?: StringFilter<"country"> | string
    items?: ItemListRelationFilter
    itemProducers?: Item_producerListRelationFilter
  }

  export type countryOrderByWithRelationInput = {
    country_id?: SortOrder
    country_code?: SortOrder
    name?: SortOrder
    items?: itemOrderByRelationAggregateInput
    itemProducers?: item_producerOrderByRelationAggregateInput
  }

  export type countryWhereUniqueInput = Prisma.AtLeast<{
    country_id?: number
    country_code?: string
    name?: string
    AND?: countryWhereInput | countryWhereInput[]
    OR?: countryWhereInput[]
    NOT?: countryWhereInput | countryWhereInput[]
    items?: ItemListRelationFilter
    itemProducers?: Item_producerListRelationFilter
  }, "country_id" | "country_code" | "name">

  export type countryOrderByWithAggregationInput = {
    country_id?: SortOrder
    country_code?: SortOrder
    name?: SortOrder
    _count?: countryCountOrderByAggregateInput
    _avg?: countryAvgOrderByAggregateInput
    _max?: countryMaxOrderByAggregateInput
    _min?: countryMinOrderByAggregateInput
    _sum?: countrySumOrderByAggregateInput
  }

  export type countryScalarWhereWithAggregatesInput = {
    AND?: countryScalarWhereWithAggregatesInput | countryScalarWhereWithAggregatesInput[]
    OR?: countryScalarWhereWithAggregatesInput[]
    NOT?: countryScalarWhereWithAggregatesInput | countryScalarWhereWithAggregatesInput[]
    country_id?: IntWithAggregatesFilter<"country"> | number
    country_code?: StringWithAggregatesFilter<"country"> | string
    name?: StringWithAggregatesFilter<"country"> | string
  }

  export type storeWhereInput = {
    AND?: storeWhereInput | storeWhereInput[]
    OR?: storeWhereInput[]
    NOT?: storeWhereInput | storeWhereInput[]
    store_id?: IntFilter<"store"> | number
    name?: StringFilter<"store"> | string
    user_id?: IntFilter<"store"> | number
    location?: StringFilter<"store"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    purchases?: PurchaseListRelationFilter
  }

  export type storeOrderByWithRelationInput = {
    store_id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    location?: SortOrder
    user?: userOrderByWithRelationInput
    purchases?: purchaseOrderByRelationAggregateInput
  }

  export type storeWhereUniqueInput = Prisma.AtLeast<{
    store_id?: number
    AND?: storeWhereInput | storeWhereInput[]
    OR?: storeWhereInput[]
    NOT?: storeWhereInput | storeWhereInput[]
    name?: StringFilter<"store"> | string
    user_id?: IntFilter<"store"> | number
    location?: StringFilter<"store"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    purchases?: PurchaseListRelationFilter
  }, "store_id">

  export type storeOrderByWithAggregationInput = {
    store_id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    location?: SortOrder
    _count?: storeCountOrderByAggregateInput
    _avg?: storeAvgOrderByAggregateInput
    _max?: storeMaxOrderByAggregateInput
    _min?: storeMinOrderByAggregateInput
    _sum?: storeSumOrderByAggregateInput
  }

  export type storeScalarWhereWithAggregatesInput = {
    AND?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[]
    OR?: storeScalarWhereWithAggregatesInput[]
    NOT?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[]
    store_id?: IntWithAggregatesFilter<"store"> | number
    name?: StringWithAggregatesFilter<"store"> | string
    user_id?: IntWithAggregatesFilter<"store"> | number
    location?: StringWithAggregatesFilter<"store"> | string
  }

  export type userCreateInput = {
    user_name: string
    password_hash: string
    email?: string | null
    created_at?: Date | string
    last_login?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    is_admin?: boolean
    purchases?: purchaseCreateNestedManyWithoutUserInput
    stores?: storeCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id?: number
    user_name: string
    password_hash: string
    email?: string | null
    created_at?: Date | string
    last_login?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    is_admin?: boolean
    purchases?: purchaseUncheckedCreateNestedManyWithoutUserInput
    stores?: storeUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    purchases?: purchaseUpdateManyWithoutUserNestedInput
    stores?: storeUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    purchases?: purchaseUncheckedUpdateManyWithoutUserNestedInput
    stores?: storeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id?: number
    user_name: string
    password_hash: string
    email?: string | null
    created_at?: Date | string
    last_login?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    is_admin?: boolean
  }

  export type userUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type purchaseCreateInput = {
    purchased_at: Date | string
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
    user: userCreateNestedOneWithoutPurchasesInput
    store?: storeCreateNestedOneWithoutPurchasesInput
  }

  export type purchaseUncheckedCreateInput = {
    purchase_id?: number
    user_id: number
    purchased_at: Date | string
    store_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
  }

  export type purchaseUpdateInput = {
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutPurchasesNestedInput
    store?: storeUpdateOneWithoutPurchasesNestedInput
  }

  export type purchaseUncheckedUpdateInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
  }

  export type purchaseCreateManyInput = {
    purchase_id?: number
    user_id: number
    purchased_at: Date | string
    store_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
  }

  export type purchaseUpdateManyMutationInput = {
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
  }

  export type purchaseUncheckedUpdateManyInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
  }

  export type purchase_itemCreateInput = {
    purchase_id: number
    item_total_price: Decimal | DecimalJsLike | number | string
    amount: number
    item_name?: string | null
    item?: itemCreateNestedOneWithoutPurchaseItemsInput
  }

  export type purchase_itemUncheckedCreateInput = {
    purchase_item_id?: number
    purchase_id: number
    item_id?: number | null
    item_total_price: Decimal | DecimalJsLike | number | string
    amount: number
    item_name?: string | null
  }

  export type purchase_itemUpdateInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    item_total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: IntFieldUpdateOperationsInput | number
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    item?: itemUpdateOneWithoutPurchaseItemsNestedInput
  }

  export type purchase_itemUncheckedUpdateInput = {
    purchase_item_id?: IntFieldUpdateOperationsInput | number
    purchase_id?: IntFieldUpdateOperationsInput | number
    item_id?: NullableIntFieldUpdateOperationsInput | number | null
    item_total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: IntFieldUpdateOperationsInput | number
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type purchase_itemCreateManyInput = {
    purchase_item_id?: number
    purchase_id: number
    item_id?: number | null
    item_total_price: Decimal | DecimalJsLike | number | string
    amount: number
    item_name?: string | null
  }

  export type purchase_itemUpdateManyMutationInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    item_total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: IntFieldUpdateOperationsInput | number
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type purchase_itemUncheckedUpdateManyInput = {
    purchase_item_id?: IntFieldUpdateOperationsInput | number
    purchase_id?: IntFieldUpdateOperationsInput | number
    item_id?: NullableIntFieldUpdateOperationsInput | number | null
    item_total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: IntFieldUpdateOperationsInput | number
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemCreateInput = {
    name: string
    value: Decimal | DecimalJsLike | number | string
    unit: string
    created_at?: Date | string
    item_type?: item_typeCreateNestedOneWithoutItemsInput
    country?: countryCreateNestedOneWithoutItemsInput
    item_producer?: item_producerCreateNestedOneWithoutItemsInput
    purchaseItems?: purchase_itemCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateInput = {
    item_id?: number
    name: string
    item_type_id?: number | null
    country_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    item_producer_id?: number | null
    created_at?: Date | string
    purchaseItems?: purchase_itemUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item_type?: item_typeUpdateOneWithoutItemsNestedInput
    country?: countryUpdateOneWithoutItemsNestedInput
    item_producer?: item_producerUpdateOneWithoutItemsNestedInput
    purchaseItems?: purchase_itemUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    item_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: purchase_itemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemCreateManyInput = {
    item_id?: number
    name: string
    item_type_id?: number | null
    country_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    item_producer_id?: number | null
    created_at?: Date | string
  }

  export type itemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type itemUncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    item_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type item_producerCreateInput = {
    item_producer_name: string
    country?: countryCreateNestedOneWithoutItemProducersInput
    items?: itemCreateNestedManyWithoutItem_producerInput
  }

  export type item_producerUncheckedCreateInput = {
    item_producer_id?: number
    item_producer_name: string
    country_id?: number | null
    items?: itemUncheckedCreateNestedManyWithoutItem_producerInput
  }

  export type item_producerUpdateInput = {
    item_producer_name?: StringFieldUpdateOperationsInput | string
    country?: countryUpdateOneWithoutItemProducersNestedInput
    items?: itemUpdateManyWithoutItem_producerNestedInput
  }

  export type item_producerUncheckedUpdateInput = {
    item_producer_id?: IntFieldUpdateOperationsInput | number
    item_producer_name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    items?: itemUncheckedUpdateManyWithoutItem_producerNestedInput
  }

  export type item_producerCreateManyInput = {
    item_producer_id?: number
    item_producer_name: string
    country_id?: number | null
  }

  export type item_producerUpdateManyMutationInput = {
    item_producer_name?: StringFieldUpdateOperationsInput | string
  }

  export type item_producerUncheckedUpdateManyInput = {
    item_producer_id?: IntFieldUpdateOperationsInput | number
    item_producer_name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type item_typeCreateInput = {
    item_type_name: string
    items?: itemCreateNestedManyWithoutItem_typeInput
  }

  export type item_typeUncheckedCreateInput = {
    item_type_id?: number
    item_type_name: string
    items?: itemUncheckedCreateNestedManyWithoutItem_typeInput
  }

  export type item_typeUpdateInput = {
    item_type_name?: StringFieldUpdateOperationsInput | string
    items?: itemUpdateManyWithoutItem_typeNestedInput
  }

  export type item_typeUncheckedUpdateInput = {
    item_type_id?: IntFieldUpdateOperationsInput | number
    item_type_name?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutItem_typeNestedInput
  }

  export type item_typeCreateManyInput = {
    item_type_id?: number
    item_type_name: string
  }

  export type item_typeUpdateManyMutationInput = {
    item_type_name?: StringFieldUpdateOperationsInput | string
  }

  export type item_typeUncheckedUpdateManyInput = {
    item_type_id?: IntFieldUpdateOperationsInput | number
    item_type_name?: StringFieldUpdateOperationsInput | string
  }

  export type countryCreateInput = {
    country_code: string
    name: string
    items?: itemCreateNestedManyWithoutCountryInput
    itemProducers?: item_producerCreateNestedManyWithoutCountryInput
  }

  export type countryUncheckedCreateInput = {
    country_id?: number
    country_code: string
    name: string
    items?: itemUncheckedCreateNestedManyWithoutCountryInput
    itemProducers?: item_producerUncheckedCreateNestedManyWithoutCountryInput
  }

  export type countryUpdateInput = {
    country_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: itemUpdateManyWithoutCountryNestedInput
    itemProducers?: item_producerUpdateManyWithoutCountryNestedInput
  }

  export type countryUncheckedUpdateInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutCountryNestedInput
    itemProducers?: item_producerUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type countryCreateManyInput = {
    country_id?: number
    country_code: string
    name: string
  }

  export type countryUpdateManyMutationInput = {
    country_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type countryUncheckedUpdateManyInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type storeCreateInput = {
    name: string
    location: string
    user: userCreateNestedOneWithoutStoresInput
    purchases?: purchaseCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateInput = {
    store_id?: number
    name: string
    user_id: number
    location: string
    purchases?: purchaseUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutStoresNestedInput
    purchases?: purchaseUpdateManyWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    purchases?: purchaseUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type storeCreateManyInput = {
    store_id?: number
    name: string
    user_id: number
    location: string
  }

  export type storeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type storeUncheckedUpdateManyInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PurchaseListRelationFilter = {
    every?: purchaseWhereInput
    some?: purchaseWhereInput
    none?: purchaseWhereInput
  }

  export type StoreListRelationFilter = {
    every?: storeWhereInput
    some?: storeWhereInput
    none?: storeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type purchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    password_hash?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    is_admin?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    password_hash?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    is_admin?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    password_hash?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    is_admin?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type StoreNullableScalarRelationFilter = {
    is?: storeWhereInput | null
    isNot?: storeWhereInput | null
  }

  export type purchaseCountOrderByAggregateInput = {
    purchase_id?: SortOrder
    user_id?: SortOrder
    purchased_at?: SortOrder
    store_id?: SortOrder
    total_price?: SortOrder
    item_count?: SortOrder
  }

  export type purchaseAvgOrderByAggregateInput = {
    purchase_id?: SortOrder
    user_id?: SortOrder
    store_id?: SortOrder
    total_price?: SortOrder
    item_count?: SortOrder
  }

  export type purchaseMaxOrderByAggregateInput = {
    purchase_id?: SortOrder
    user_id?: SortOrder
    purchased_at?: SortOrder
    store_id?: SortOrder
    total_price?: SortOrder
    item_count?: SortOrder
  }

  export type purchaseMinOrderByAggregateInput = {
    purchase_id?: SortOrder
    user_id?: SortOrder
    purchased_at?: SortOrder
    store_id?: SortOrder
    total_price?: SortOrder
    item_count?: SortOrder
  }

  export type purchaseSumOrderByAggregateInput = {
    purchase_id?: SortOrder
    user_id?: SortOrder
    store_id?: SortOrder
    total_price?: SortOrder
    item_count?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ItemNullableScalarRelationFilter = {
    is?: itemWhereInput | null
    isNot?: itemWhereInput | null
  }

  export type purchase_itemCountOrderByAggregateInput = {
    purchase_item_id?: SortOrder
    purchase_id?: SortOrder
    item_id?: SortOrder
    item_total_price?: SortOrder
    amount?: SortOrder
    item_name?: SortOrder
  }

  export type purchase_itemAvgOrderByAggregateInput = {
    purchase_item_id?: SortOrder
    purchase_id?: SortOrder
    item_id?: SortOrder
    item_total_price?: SortOrder
    amount?: SortOrder
  }

  export type purchase_itemMaxOrderByAggregateInput = {
    purchase_item_id?: SortOrder
    purchase_id?: SortOrder
    item_id?: SortOrder
    item_total_price?: SortOrder
    amount?: SortOrder
    item_name?: SortOrder
  }

  export type purchase_itemMinOrderByAggregateInput = {
    purchase_item_id?: SortOrder
    purchase_id?: SortOrder
    item_id?: SortOrder
    item_total_price?: SortOrder
    amount?: SortOrder
    item_name?: SortOrder
  }

  export type purchase_itemSumOrderByAggregateInput = {
    purchase_item_id?: SortOrder
    purchase_id?: SortOrder
    item_id?: SortOrder
    item_total_price?: SortOrder
    amount?: SortOrder
  }

  export type Item_typeNullableScalarRelationFilter = {
    is?: item_typeWhereInput | null
    isNot?: item_typeWhereInput | null
  }

  export type CountryNullableScalarRelationFilter = {
    is?: countryWhereInput | null
    isNot?: countryWhereInput | null
  }

  export type Item_producerNullableScalarRelationFilter = {
    is?: item_producerWhereInput | null
    isNot?: item_producerWhereInput | null
  }

  export type Purchase_itemListRelationFilter = {
    every?: purchase_itemWhereInput
    some?: purchase_itemWhereInput
    none?: purchase_itemWhereInput
  }

  export type purchase_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itemCountOrderByAggregateInput = {
    item_id?: SortOrder
    name?: SortOrder
    item_type_id?: SortOrder
    country_id?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    item_producer_id?: SortOrder
    created_at?: SortOrder
  }

  export type itemAvgOrderByAggregateInput = {
    item_id?: SortOrder
    item_type_id?: SortOrder
    country_id?: SortOrder
    value?: SortOrder
    item_producer_id?: SortOrder
  }

  export type itemMaxOrderByAggregateInput = {
    item_id?: SortOrder
    name?: SortOrder
    item_type_id?: SortOrder
    country_id?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    item_producer_id?: SortOrder
    created_at?: SortOrder
  }

  export type itemMinOrderByAggregateInput = {
    item_id?: SortOrder
    name?: SortOrder
    item_type_id?: SortOrder
    country_id?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    item_producer_id?: SortOrder
    created_at?: SortOrder
  }

  export type itemSumOrderByAggregateInput = {
    item_id?: SortOrder
    item_type_id?: SortOrder
    country_id?: SortOrder
    value?: SortOrder
    item_producer_id?: SortOrder
  }

  export type ItemListRelationFilter = {
    every?: itemWhereInput
    some?: itemWhereInput
    none?: itemWhereInput
  }

  export type itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type item_producerCountOrderByAggregateInput = {
    item_producer_id?: SortOrder
    item_producer_name?: SortOrder
    country_id?: SortOrder
  }

  export type item_producerAvgOrderByAggregateInput = {
    item_producer_id?: SortOrder
    country_id?: SortOrder
  }

  export type item_producerMaxOrderByAggregateInput = {
    item_producer_id?: SortOrder
    item_producer_name?: SortOrder
    country_id?: SortOrder
  }

  export type item_producerMinOrderByAggregateInput = {
    item_producer_id?: SortOrder
    item_producer_name?: SortOrder
    country_id?: SortOrder
  }

  export type item_producerSumOrderByAggregateInput = {
    item_producer_id?: SortOrder
    country_id?: SortOrder
  }

  export type item_typeCountOrderByAggregateInput = {
    item_type_id?: SortOrder
    item_type_name?: SortOrder
  }

  export type item_typeAvgOrderByAggregateInput = {
    item_type_id?: SortOrder
  }

  export type item_typeMaxOrderByAggregateInput = {
    item_type_id?: SortOrder
    item_type_name?: SortOrder
  }

  export type item_typeMinOrderByAggregateInput = {
    item_type_id?: SortOrder
    item_type_name?: SortOrder
  }

  export type item_typeSumOrderByAggregateInput = {
    item_type_id?: SortOrder
  }

  export type Item_producerListRelationFilter = {
    every?: item_producerWhereInput
    some?: item_producerWhereInput
    none?: item_producerWhereInput
  }

  export type item_producerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type countryCountOrderByAggregateInput = {
    country_id?: SortOrder
    country_code?: SortOrder
    name?: SortOrder
  }

  export type countryAvgOrderByAggregateInput = {
    country_id?: SortOrder
  }

  export type countryMaxOrderByAggregateInput = {
    country_id?: SortOrder
    country_code?: SortOrder
    name?: SortOrder
  }

  export type countryMinOrderByAggregateInput = {
    country_id?: SortOrder
    country_code?: SortOrder
    name?: SortOrder
  }

  export type countrySumOrderByAggregateInput = {
    country_id?: SortOrder
  }

  export type storeCountOrderByAggregateInput = {
    store_id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    location?: SortOrder
  }

  export type storeAvgOrderByAggregateInput = {
    store_id?: SortOrder
    user_id?: SortOrder
  }

  export type storeMaxOrderByAggregateInput = {
    store_id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    location?: SortOrder
  }

  export type storeMinOrderByAggregateInput = {
    store_id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    location?: SortOrder
  }

  export type storeSumOrderByAggregateInput = {
    store_id?: SortOrder
    user_id?: SortOrder
  }

  export type purchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput> | purchaseCreateWithoutUserInput[] | purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchaseCreateOrConnectWithoutUserInput | purchaseCreateOrConnectWithoutUserInput[]
    createMany?: purchaseCreateManyUserInputEnvelope
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
  }

  export type storeCreateNestedManyWithoutUserInput = {
    create?: XOR<storeCreateWithoutUserInput, storeUncheckedCreateWithoutUserInput> | storeCreateWithoutUserInput[] | storeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: storeCreateOrConnectWithoutUserInput | storeCreateOrConnectWithoutUserInput[]
    createMany?: storeCreateManyUserInputEnvelope
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[]
  }

  export type purchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput> | purchaseCreateWithoutUserInput[] | purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchaseCreateOrConnectWithoutUserInput | purchaseCreateOrConnectWithoutUserInput[]
    createMany?: purchaseCreateManyUserInputEnvelope
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
  }

  export type storeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<storeCreateWithoutUserInput, storeUncheckedCreateWithoutUserInput> | storeCreateWithoutUserInput[] | storeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: storeCreateOrConnectWithoutUserInput | storeCreateOrConnectWithoutUserInput[]
    createMany?: storeCreateManyUserInputEnvelope
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type purchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput> | purchaseCreateWithoutUserInput[] | purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchaseCreateOrConnectWithoutUserInput | purchaseCreateOrConnectWithoutUserInput[]
    upsert?: purchaseUpsertWithWhereUniqueWithoutUserInput | purchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: purchaseCreateManyUserInputEnvelope
    set?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    disconnect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    delete?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    update?: purchaseUpdateWithWhereUniqueWithoutUserInput | purchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: purchaseUpdateManyWithWhereWithoutUserInput | purchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: purchaseScalarWhereInput | purchaseScalarWhereInput[]
  }

  export type storeUpdateManyWithoutUserNestedInput = {
    create?: XOR<storeCreateWithoutUserInput, storeUncheckedCreateWithoutUserInput> | storeCreateWithoutUserInput[] | storeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: storeCreateOrConnectWithoutUserInput | storeCreateOrConnectWithoutUserInput[]
    upsert?: storeUpsertWithWhereUniqueWithoutUserInput | storeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: storeCreateManyUserInputEnvelope
    set?: storeWhereUniqueInput | storeWhereUniqueInput[]
    disconnect?: storeWhereUniqueInput | storeWhereUniqueInput[]
    delete?: storeWhereUniqueInput | storeWhereUniqueInput[]
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[]
    update?: storeUpdateWithWhereUniqueWithoutUserInput | storeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: storeUpdateManyWithWhereWithoutUserInput | storeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: storeScalarWhereInput | storeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type purchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput> | purchaseCreateWithoutUserInput[] | purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchaseCreateOrConnectWithoutUserInput | purchaseCreateOrConnectWithoutUserInput[]
    upsert?: purchaseUpsertWithWhereUniqueWithoutUserInput | purchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: purchaseCreateManyUserInputEnvelope
    set?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    disconnect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    delete?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    update?: purchaseUpdateWithWhereUniqueWithoutUserInput | purchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: purchaseUpdateManyWithWhereWithoutUserInput | purchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: purchaseScalarWhereInput | purchaseScalarWhereInput[]
  }

  export type storeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<storeCreateWithoutUserInput, storeUncheckedCreateWithoutUserInput> | storeCreateWithoutUserInput[] | storeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: storeCreateOrConnectWithoutUserInput | storeCreateOrConnectWithoutUserInput[]
    upsert?: storeUpsertWithWhereUniqueWithoutUserInput | storeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: storeCreateManyUserInputEnvelope
    set?: storeWhereUniqueInput | storeWhereUniqueInput[]
    disconnect?: storeWhereUniqueInput | storeWhereUniqueInput[]
    delete?: storeWhereUniqueInput | storeWhereUniqueInput[]
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[]
    update?: storeUpdateWithWhereUniqueWithoutUserInput | storeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: storeUpdateManyWithWhereWithoutUserInput | storeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: storeScalarWhereInput | storeScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<userCreateWithoutPurchasesInput, userUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: userCreateOrConnectWithoutPurchasesInput
    connect?: userWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<storeCreateWithoutPurchasesInput, storeUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: storeCreateOrConnectWithoutPurchasesInput
    connect?: storeWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type userUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<userCreateWithoutPurchasesInput, userUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: userCreateOrConnectWithoutPurchasesInput
    upsert?: userUpsertWithoutPurchasesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPurchasesInput, userUpdateWithoutPurchasesInput>, userUncheckedUpdateWithoutPurchasesInput>
  }

  export type storeUpdateOneWithoutPurchasesNestedInput = {
    create?: XOR<storeCreateWithoutPurchasesInput, storeUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: storeCreateOrConnectWithoutPurchasesInput
    upsert?: storeUpsertWithoutPurchasesInput
    disconnect?: storeWhereInput | boolean
    delete?: storeWhereInput | boolean
    connect?: storeWhereUniqueInput
    update?: XOR<XOR<storeUpdateToOneWithWhereWithoutPurchasesInput, storeUpdateWithoutPurchasesInput>, storeUncheckedUpdateWithoutPurchasesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type itemCreateNestedOneWithoutPurchaseItemsInput = {
    create?: XOR<itemCreateWithoutPurchaseItemsInput, itemUncheckedCreateWithoutPurchaseItemsInput>
    connectOrCreate?: itemCreateOrConnectWithoutPurchaseItemsInput
    connect?: itemWhereUniqueInput
  }

  export type itemUpdateOneWithoutPurchaseItemsNestedInput = {
    create?: XOR<itemCreateWithoutPurchaseItemsInput, itemUncheckedCreateWithoutPurchaseItemsInput>
    connectOrCreate?: itemCreateOrConnectWithoutPurchaseItemsInput
    upsert?: itemUpsertWithoutPurchaseItemsInput
    disconnect?: itemWhereInput | boolean
    delete?: itemWhereInput | boolean
    connect?: itemWhereUniqueInput
    update?: XOR<XOR<itemUpdateToOneWithWhereWithoutPurchaseItemsInput, itemUpdateWithoutPurchaseItemsInput>, itemUncheckedUpdateWithoutPurchaseItemsInput>
  }

  export type item_typeCreateNestedOneWithoutItemsInput = {
    create?: XOR<item_typeCreateWithoutItemsInput, item_typeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: item_typeCreateOrConnectWithoutItemsInput
    connect?: item_typeWhereUniqueInput
  }

  export type countryCreateNestedOneWithoutItemsInput = {
    create?: XOR<countryCreateWithoutItemsInput, countryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: countryCreateOrConnectWithoutItemsInput
    connect?: countryWhereUniqueInput
  }

  export type item_producerCreateNestedOneWithoutItemsInput = {
    create?: XOR<item_producerCreateWithoutItemsInput, item_producerUncheckedCreateWithoutItemsInput>
    connectOrCreate?: item_producerCreateOrConnectWithoutItemsInput
    connect?: item_producerWhereUniqueInput
  }

  export type purchase_itemCreateNestedManyWithoutItemInput = {
    create?: XOR<purchase_itemCreateWithoutItemInput, purchase_itemUncheckedCreateWithoutItemInput> | purchase_itemCreateWithoutItemInput[] | purchase_itemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: purchase_itemCreateOrConnectWithoutItemInput | purchase_itemCreateOrConnectWithoutItemInput[]
    createMany?: purchase_itemCreateManyItemInputEnvelope
    connect?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
  }

  export type purchase_itemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<purchase_itemCreateWithoutItemInput, purchase_itemUncheckedCreateWithoutItemInput> | purchase_itemCreateWithoutItemInput[] | purchase_itemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: purchase_itemCreateOrConnectWithoutItemInput | purchase_itemCreateOrConnectWithoutItemInput[]
    createMany?: purchase_itemCreateManyItemInputEnvelope
    connect?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
  }

  export type item_typeUpdateOneWithoutItemsNestedInput = {
    create?: XOR<item_typeCreateWithoutItemsInput, item_typeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: item_typeCreateOrConnectWithoutItemsInput
    upsert?: item_typeUpsertWithoutItemsInput
    disconnect?: item_typeWhereInput | boolean
    delete?: item_typeWhereInput | boolean
    connect?: item_typeWhereUniqueInput
    update?: XOR<XOR<item_typeUpdateToOneWithWhereWithoutItemsInput, item_typeUpdateWithoutItemsInput>, item_typeUncheckedUpdateWithoutItemsInput>
  }

  export type countryUpdateOneWithoutItemsNestedInput = {
    create?: XOR<countryCreateWithoutItemsInput, countryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: countryCreateOrConnectWithoutItemsInput
    upsert?: countryUpsertWithoutItemsInput
    disconnect?: countryWhereInput | boolean
    delete?: countryWhereInput | boolean
    connect?: countryWhereUniqueInput
    update?: XOR<XOR<countryUpdateToOneWithWhereWithoutItemsInput, countryUpdateWithoutItemsInput>, countryUncheckedUpdateWithoutItemsInput>
  }

  export type item_producerUpdateOneWithoutItemsNestedInput = {
    create?: XOR<item_producerCreateWithoutItemsInput, item_producerUncheckedCreateWithoutItemsInput>
    connectOrCreate?: item_producerCreateOrConnectWithoutItemsInput
    upsert?: item_producerUpsertWithoutItemsInput
    disconnect?: item_producerWhereInput | boolean
    delete?: item_producerWhereInput | boolean
    connect?: item_producerWhereUniqueInput
    update?: XOR<XOR<item_producerUpdateToOneWithWhereWithoutItemsInput, item_producerUpdateWithoutItemsInput>, item_producerUncheckedUpdateWithoutItemsInput>
  }

  export type purchase_itemUpdateManyWithoutItemNestedInput = {
    create?: XOR<purchase_itemCreateWithoutItemInput, purchase_itemUncheckedCreateWithoutItemInput> | purchase_itemCreateWithoutItemInput[] | purchase_itemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: purchase_itemCreateOrConnectWithoutItemInput | purchase_itemCreateOrConnectWithoutItemInput[]
    upsert?: purchase_itemUpsertWithWhereUniqueWithoutItemInput | purchase_itemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: purchase_itemCreateManyItemInputEnvelope
    set?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
    disconnect?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
    delete?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
    connect?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
    update?: purchase_itemUpdateWithWhereUniqueWithoutItemInput | purchase_itemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: purchase_itemUpdateManyWithWhereWithoutItemInput | purchase_itemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: purchase_itemScalarWhereInput | purchase_itemScalarWhereInput[]
  }

  export type purchase_itemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<purchase_itemCreateWithoutItemInput, purchase_itemUncheckedCreateWithoutItemInput> | purchase_itemCreateWithoutItemInput[] | purchase_itemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: purchase_itemCreateOrConnectWithoutItemInput | purchase_itemCreateOrConnectWithoutItemInput[]
    upsert?: purchase_itemUpsertWithWhereUniqueWithoutItemInput | purchase_itemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: purchase_itemCreateManyItemInputEnvelope
    set?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
    disconnect?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
    delete?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
    connect?: purchase_itemWhereUniqueInput | purchase_itemWhereUniqueInput[]
    update?: purchase_itemUpdateWithWhereUniqueWithoutItemInput | purchase_itemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: purchase_itemUpdateManyWithWhereWithoutItemInput | purchase_itemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: purchase_itemScalarWhereInput | purchase_itemScalarWhereInput[]
  }

  export type countryCreateNestedOneWithoutItemProducersInput = {
    create?: XOR<countryCreateWithoutItemProducersInput, countryUncheckedCreateWithoutItemProducersInput>
    connectOrCreate?: countryCreateOrConnectWithoutItemProducersInput
    connect?: countryWhereUniqueInput
  }

  export type itemCreateNestedManyWithoutItem_producerInput = {
    create?: XOR<itemCreateWithoutItem_producerInput, itemUncheckedCreateWithoutItem_producerInput> | itemCreateWithoutItem_producerInput[] | itemUncheckedCreateWithoutItem_producerInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_producerInput | itemCreateOrConnectWithoutItem_producerInput[]
    createMany?: itemCreateManyItem_producerInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutItem_producerInput = {
    create?: XOR<itemCreateWithoutItem_producerInput, itemUncheckedCreateWithoutItem_producerInput> | itemCreateWithoutItem_producerInput[] | itemUncheckedCreateWithoutItem_producerInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_producerInput | itemCreateOrConnectWithoutItem_producerInput[]
    createMany?: itemCreateManyItem_producerInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type countryUpdateOneWithoutItemProducersNestedInput = {
    create?: XOR<countryCreateWithoutItemProducersInput, countryUncheckedCreateWithoutItemProducersInput>
    connectOrCreate?: countryCreateOrConnectWithoutItemProducersInput
    upsert?: countryUpsertWithoutItemProducersInput
    disconnect?: countryWhereInput | boolean
    delete?: countryWhereInput | boolean
    connect?: countryWhereUniqueInput
    update?: XOR<XOR<countryUpdateToOneWithWhereWithoutItemProducersInput, countryUpdateWithoutItemProducersInput>, countryUncheckedUpdateWithoutItemProducersInput>
  }

  export type itemUpdateManyWithoutItem_producerNestedInput = {
    create?: XOR<itemCreateWithoutItem_producerInput, itemUncheckedCreateWithoutItem_producerInput> | itemCreateWithoutItem_producerInput[] | itemUncheckedCreateWithoutItem_producerInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_producerInput | itemCreateOrConnectWithoutItem_producerInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutItem_producerInput | itemUpsertWithWhereUniqueWithoutItem_producerInput[]
    createMany?: itemCreateManyItem_producerInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutItem_producerInput | itemUpdateWithWhereUniqueWithoutItem_producerInput[]
    updateMany?: itemUpdateManyWithWhereWithoutItem_producerInput | itemUpdateManyWithWhereWithoutItem_producerInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type itemUncheckedUpdateManyWithoutItem_producerNestedInput = {
    create?: XOR<itemCreateWithoutItem_producerInput, itemUncheckedCreateWithoutItem_producerInput> | itemCreateWithoutItem_producerInput[] | itemUncheckedCreateWithoutItem_producerInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_producerInput | itemCreateOrConnectWithoutItem_producerInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutItem_producerInput | itemUpsertWithWhereUniqueWithoutItem_producerInput[]
    createMany?: itemCreateManyItem_producerInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutItem_producerInput | itemUpdateWithWhereUniqueWithoutItem_producerInput[]
    updateMany?: itemUpdateManyWithWhereWithoutItem_producerInput | itemUpdateManyWithWhereWithoutItem_producerInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type itemCreateNestedManyWithoutItem_typeInput = {
    create?: XOR<itemCreateWithoutItem_typeInput, itemUncheckedCreateWithoutItem_typeInput> | itemCreateWithoutItem_typeInput[] | itemUncheckedCreateWithoutItem_typeInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_typeInput | itemCreateOrConnectWithoutItem_typeInput[]
    createMany?: itemCreateManyItem_typeInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutItem_typeInput = {
    create?: XOR<itemCreateWithoutItem_typeInput, itemUncheckedCreateWithoutItem_typeInput> | itemCreateWithoutItem_typeInput[] | itemUncheckedCreateWithoutItem_typeInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_typeInput | itemCreateOrConnectWithoutItem_typeInput[]
    createMany?: itemCreateManyItem_typeInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type itemUpdateManyWithoutItem_typeNestedInput = {
    create?: XOR<itemCreateWithoutItem_typeInput, itemUncheckedCreateWithoutItem_typeInput> | itemCreateWithoutItem_typeInput[] | itemUncheckedCreateWithoutItem_typeInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_typeInput | itemCreateOrConnectWithoutItem_typeInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutItem_typeInput | itemUpsertWithWhereUniqueWithoutItem_typeInput[]
    createMany?: itemCreateManyItem_typeInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutItem_typeInput | itemUpdateWithWhereUniqueWithoutItem_typeInput[]
    updateMany?: itemUpdateManyWithWhereWithoutItem_typeInput | itemUpdateManyWithWhereWithoutItem_typeInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type itemUncheckedUpdateManyWithoutItem_typeNestedInput = {
    create?: XOR<itemCreateWithoutItem_typeInput, itemUncheckedCreateWithoutItem_typeInput> | itemCreateWithoutItem_typeInput[] | itemUncheckedCreateWithoutItem_typeInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_typeInput | itemCreateOrConnectWithoutItem_typeInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutItem_typeInput | itemUpsertWithWhereUniqueWithoutItem_typeInput[]
    createMany?: itemCreateManyItem_typeInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutItem_typeInput | itemUpdateWithWhereUniqueWithoutItem_typeInput[]
    updateMany?: itemUpdateManyWithWhereWithoutItem_typeInput | itemUpdateManyWithWhereWithoutItem_typeInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type itemCreateNestedManyWithoutCountryInput = {
    create?: XOR<itemCreateWithoutCountryInput, itemUncheckedCreateWithoutCountryInput> | itemCreateWithoutCountryInput[] | itemUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutCountryInput | itemCreateOrConnectWithoutCountryInput[]
    createMany?: itemCreateManyCountryInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type item_producerCreateNestedManyWithoutCountryInput = {
    create?: XOR<item_producerCreateWithoutCountryInput, item_producerUncheckedCreateWithoutCountryInput> | item_producerCreateWithoutCountryInput[] | item_producerUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: item_producerCreateOrConnectWithoutCountryInput | item_producerCreateOrConnectWithoutCountryInput[]
    createMany?: item_producerCreateManyCountryInputEnvelope
    connect?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<itemCreateWithoutCountryInput, itemUncheckedCreateWithoutCountryInput> | itemCreateWithoutCountryInput[] | itemUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutCountryInput | itemCreateOrConnectWithoutCountryInput[]
    createMany?: itemCreateManyCountryInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type item_producerUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<item_producerCreateWithoutCountryInput, item_producerUncheckedCreateWithoutCountryInput> | item_producerCreateWithoutCountryInput[] | item_producerUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: item_producerCreateOrConnectWithoutCountryInput | item_producerCreateOrConnectWithoutCountryInput[]
    createMany?: item_producerCreateManyCountryInputEnvelope
    connect?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
  }

  export type itemUpdateManyWithoutCountryNestedInput = {
    create?: XOR<itemCreateWithoutCountryInput, itemUncheckedCreateWithoutCountryInput> | itemCreateWithoutCountryInput[] | itemUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutCountryInput | itemCreateOrConnectWithoutCountryInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutCountryInput | itemUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: itemCreateManyCountryInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutCountryInput | itemUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: itemUpdateManyWithWhereWithoutCountryInput | itemUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type item_producerUpdateManyWithoutCountryNestedInput = {
    create?: XOR<item_producerCreateWithoutCountryInput, item_producerUncheckedCreateWithoutCountryInput> | item_producerCreateWithoutCountryInput[] | item_producerUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: item_producerCreateOrConnectWithoutCountryInput | item_producerCreateOrConnectWithoutCountryInput[]
    upsert?: item_producerUpsertWithWhereUniqueWithoutCountryInput | item_producerUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: item_producerCreateManyCountryInputEnvelope
    set?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
    disconnect?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
    delete?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
    connect?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
    update?: item_producerUpdateWithWhereUniqueWithoutCountryInput | item_producerUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: item_producerUpdateManyWithWhereWithoutCountryInput | item_producerUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: item_producerScalarWhereInput | item_producerScalarWhereInput[]
  }

  export type itemUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<itemCreateWithoutCountryInput, itemUncheckedCreateWithoutCountryInput> | itemCreateWithoutCountryInput[] | itemUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutCountryInput | itemCreateOrConnectWithoutCountryInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutCountryInput | itemUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: itemCreateManyCountryInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutCountryInput | itemUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: itemUpdateManyWithWhereWithoutCountryInput | itemUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type item_producerUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<item_producerCreateWithoutCountryInput, item_producerUncheckedCreateWithoutCountryInput> | item_producerCreateWithoutCountryInput[] | item_producerUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: item_producerCreateOrConnectWithoutCountryInput | item_producerCreateOrConnectWithoutCountryInput[]
    upsert?: item_producerUpsertWithWhereUniqueWithoutCountryInput | item_producerUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: item_producerCreateManyCountryInputEnvelope
    set?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
    disconnect?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
    delete?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
    connect?: item_producerWhereUniqueInput | item_producerWhereUniqueInput[]
    update?: item_producerUpdateWithWhereUniqueWithoutCountryInput | item_producerUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: item_producerUpdateManyWithWhereWithoutCountryInput | item_producerUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: item_producerScalarWhereInput | item_producerScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutStoresInput = {
    create?: XOR<userCreateWithoutStoresInput, userUncheckedCreateWithoutStoresInput>
    connectOrCreate?: userCreateOrConnectWithoutStoresInput
    connect?: userWhereUniqueInput
  }

  export type purchaseCreateNestedManyWithoutStoreInput = {
    create?: XOR<purchaseCreateWithoutStoreInput, purchaseUncheckedCreateWithoutStoreInput> | purchaseCreateWithoutStoreInput[] | purchaseUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: purchaseCreateOrConnectWithoutStoreInput | purchaseCreateOrConnectWithoutStoreInput[]
    createMany?: purchaseCreateManyStoreInputEnvelope
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
  }

  export type purchaseUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<purchaseCreateWithoutStoreInput, purchaseUncheckedCreateWithoutStoreInput> | purchaseCreateWithoutStoreInput[] | purchaseUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: purchaseCreateOrConnectWithoutStoreInput | purchaseCreateOrConnectWithoutStoreInput[]
    createMany?: purchaseCreateManyStoreInputEnvelope
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<userCreateWithoutStoresInput, userUncheckedCreateWithoutStoresInput>
    connectOrCreate?: userCreateOrConnectWithoutStoresInput
    upsert?: userUpsertWithoutStoresInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutStoresInput, userUpdateWithoutStoresInput>, userUncheckedUpdateWithoutStoresInput>
  }

  export type purchaseUpdateManyWithoutStoreNestedInput = {
    create?: XOR<purchaseCreateWithoutStoreInput, purchaseUncheckedCreateWithoutStoreInput> | purchaseCreateWithoutStoreInput[] | purchaseUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: purchaseCreateOrConnectWithoutStoreInput | purchaseCreateOrConnectWithoutStoreInput[]
    upsert?: purchaseUpsertWithWhereUniqueWithoutStoreInput | purchaseUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: purchaseCreateManyStoreInputEnvelope
    set?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    disconnect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    delete?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    update?: purchaseUpdateWithWhereUniqueWithoutStoreInput | purchaseUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: purchaseUpdateManyWithWhereWithoutStoreInput | purchaseUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: purchaseScalarWhereInput | purchaseScalarWhereInput[]
  }

  export type purchaseUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<purchaseCreateWithoutStoreInput, purchaseUncheckedCreateWithoutStoreInput> | purchaseCreateWithoutStoreInput[] | purchaseUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: purchaseCreateOrConnectWithoutStoreInput | purchaseCreateOrConnectWithoutStoreInput[]
    upsert?: purchaseUpsertWithWhereUniqueWithoutStoreInput | purchaseUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: purchaseCreateManyStoreInputEnvelope
    set?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    disconnect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    delete?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    connect?: purchaseWhereUniqueInput | purchaseWhereUniqueInput[]
    update?: purchaseUpdateWithWhereUniqueWithoutStoreInput | purchaseUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: purchaseUpdateManyWithWhereWithoutStoreInput | purchaseUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: purchaseScalarWhereInput | purchaseScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type purchaseCreateWithoutUserInput = {
    purchased_at: Date | string
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
    store?: storeCreateNestedOneWithoutPurchasesInput
  }

  export type purchaseUncheckedCreateWithoutUserInput = {
    purchase_id?: number
    purchased_at: Date | string
    store_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
  }

  export type purchaseCreateOrConnectWithoutUserInput = {
    where: purchaseWhereUniqueInput
    create: XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput>
  }

  export type purchaseCreateManyUserInputEnvelope = {
    data: purchaseCreateManyUserInput | purchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type storeCreateWithoutUserInput = {
    name: string
    location: string
    purchases?: purchaseCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutUserInput = {
    store_id?: number
    name: string
    location: string
    purchases?: purchaseUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutUserInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutUserInput, storeUncheckedCreateWithoutUserInput>
  }

  export type storeCreateManyUserInputEnvelope = {
    data: storeCreateManyUserInput | storeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type purchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: purchaseWhereUniqueInput
    update: XOR<purchaseUpdateWithoutUserInput, purchaseUncheckedUpdateWithoutUserInput>
    create: XOR<purchaseCreateWithoutUserInput, purchaseUncheckedCreateWithoutUserInput>
  }

  export type purchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: purchaseWhereUniqueInput
    data: XOR<purchaseUpdateWithoutUserInput, purchaseUncheckedUpdateWithoutUserInput>
  }

  export type purchaseUpdateManyWithWhereWithoutUserInput = {
    where: purchaseScalarWhereInput
    data: XOR<purchaseUpdateManyMutationInput, purchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type purchaseScalarWhereInput = {
    AND?: purchaseScalarWhereInput | purchaseScalarWhereInput[]
    OR?: purchaseScalarWhereInput[]
    NOT?: purchaseScalarWhereInput | purchaseScalarWhereInput[]
    purchase_id?: IntFilter<"purchase"> | number
    user_id?: IntFilter<"purchase"> | number
    purchased_at?: DateTimeFilter<"purchase"> | Date | string
    store_id?: IntNullableFilter<"purchase"> | number | null
    total_price?: DecimalFilter<"purchase"> | Decimal | DecimalJsLike | number | string
    item_count?: IntFilter<"purchase"> | number
  }

  export type storeUpsertWithWhereUniqueWithoutUserInput = {
    where: storeWhereUniqueInput
    update: XOR<storeUpdateWithoutUserInput, storeUncheckedUpdateWithoutUserInput>
    create: XOR<storeCreateWithoutUserInput, storeUncheckedCreateWithoutUserInput>
  }

  export type storeUpdateWithWhereUniqueWithoutUserInput = {
    where: storeWhereUniqueInput
    data: XOR<storeUpdateWithoutUserInput, storeUncheckedUpdateWithoutUserInput>
  }

  export type storeUpdateManyWithWhereWithoutUserInput = {
    where: storeScalarWhereInput
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyWithoutUserInput>
  }

  export type storeScalarWhereInput = {
    AND?: storeScalarWhereInput | storeScalarWhereInput[]
    OR?: storeScalarWhereInput[]
    NOT?: storeScalarWhereInput | storeScalarWhereInput[]
    store_id?: IntFilter<"store"> | number
    name?: StringFilter<"store"> | string
    user_id?: IntFilter<"store"> | number
    location?: StringFilter<"store"> | string
  }

  export type userCreateWithoutPurchasesInput = {
    user_name: string
    password_hash: string
    email?: string | null
    created_at?: Date | string
    last_login?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    is_admin?: boolean
    stores?: storeCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPurchasesInput = {
    user_id?: number
    user_name: string
    password_hash: string
    email?: string | null
    created_at?: Date | string
    last_login?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    is_admin?: boolean
    stores?: storeUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPurchasesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPurchasesInput, userUncheckedCreateWithoutPurchasesInput>
  }

  export type storeCreateWithoutPurchasesInput = {
    name: string
    location: string
    user: userCreateNestedOneWithoutStoresInput
  }

  export type storeUncheckedCreateWithoutPurchasesInput = {
    store_id?: number
    name: string
    user_id: number
    location: string
  }

  export type storeCreateOrConnectWithoutPurchasesInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutPurchasesInput, storeUncheckedCreateWithoutPurchasesInput>
  }

  export type userUpsertWithoutPurchasesInput = {
    update: XOR<userUpdateWithoutPurchasesInput, userUncheckedUpdateWithoutPurchasesInput>
    create: XOR<userCreateWithoutPurchasesInput, userUncheckedCreateWithoutPurchasesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPurchasesInput, userUncheckedUpdateWithoutPurchasesInput>
  }

  export type userUpdateWithoutPurchasesInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    stores?: storeUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPurchasesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    stores?: storeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type storeUpsertWithoutPurchasesInput = {
    update: XOR<storeUpdateWithoutPurchasesInput, storeUncheckedUpdateWithoutPurchasesInput>
    create: XOR<storeCreateWithoutPurchasesInput, storeUncheckedCreateWithoutPurchasesInput>
    where?: storeWhereInput
  }

  export type storeUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: storeWhereInput
    data: XOR<storeUpdateWithoutPurchasesInput, storeUncheckedUpdateWithoutPurchasesInput>
  }

  export type storeUpdateWithoutPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutStoresNestedInput
  }

  export type storeUncheckedUpdateWithoutPurchasesInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
  }

  export type itemCreateWithoutPurchaseItemsInput = {
    name: string
    value: Decimal | DecimalJsLike | number | string
    unit: string
    created_at?: Date | string
    item_type?: item_typeCreateNestedOneWithoutItemsInput
    country?: countryCreateNestedOneWithoutItemsInput
    item_producer?: item_producerCreateNestedOneWithoutItemsInput
  }

  export type itemUncheckedCreateWithoutPurchaseItemsInput = {
    item_id?: number
    name: string
    item_type_id?: number | null
    country_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    item_producer_id?: number | null
    created_at?: Date | string
  }

  export type itemCreateOrConnectWithoutPurchaseItemsInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutPurchaseItemsInput, itemUncheckedCreateWithoutPurchaseItemsInput>
  }

  export type itemUpsertWithoutPurchaseItemsInput = {
    update: XOR<itemUpdateWithoutPurchaseItemsInput, itemUncheckedUpdateWithoutPurchaseItemsInput>
    create: XOR<itemCreateWithoutPurchaseItemsInput, itemUncheckedCreateWithoutPurchaseItemsInput>
    where?: itemWhereInput
  }

  export type itemUpdateToOneWithWhereWithoutPurchaseItemsInput = {
    where?: itemWhereInput
    data: XOR<itemUpdateWithoutPurchaseItemsInput, itemUncheckedUpdateWithoutPurchaseItemsInput>
  }

  export type itemUpdateWithoutPurchaseItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item_type?: item_typeUpdateOneWithoutItemsNestedInput
    country?: countryUpdateOneWithoutItemsNestedInput
    item_producer?: item_producerUpdateOneWithoutItemsNestedInput
  }

  export type itemUncheckedUpdateWithoutPurchaseItemsInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    item_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type item_typeCreateWithoutItemsInput = {
    item_type_name: string
  }

  export type item_typeUncheckedCreateWithoutItemsInput = {
    item_type_id?: number
    item_type_name: string
  }

  export type item_typeCreateOrConnectWithoutItemsInput = {
    where: item_typeWhereUniqueInput
    create: XOR<item_typeCreateWithoutItemsInput, item_typeUncheckedCreateWithoutItemsInput>
  }

  export type countryCreateWithoutItemsInput = {
    country_code: string
    name: string
    itemProducers?: item_producerCreateNestedManyWithoutCountryInput
  }

  export type countryUncheckedCreateWithoutItemsInput = {
    country_id?: number
    country_code: string
    name: string
    itemProducers?: item_producerUncheckedCreateNestedManyWithoutCountryInput
  }

  export type countryCreateOrConnectWithoutItemsInput = {
    where: countryWhereUniqueInput
    create: XOR<countryCreateWithoutItemsInput, countryUncheckedCreateWithoutItemsInput>
  }

  export type item_producerCreateWithoutItemsInput = {
    item_producer_name: string
    country?: countryCreateNestedOneWithoutItemProducersInput
  }

  export type item_producerUncheckedCreateWithoutItemsInput = {
    item_producer_id?: number
    item_producer_name: string
    country_id?: number | null
  }

  export type item_producerCreateOrConnectWithoutItemsInput = {
    where: item_producerWhereUniqueInput
    create: XOR<item_producerCreateWithoutItemsInput, item_producerUncheckedCreateWithoutItemsInput>
  }

  export type purchase_itemCreateWithoutItemInput = {
    purchase_id: number
    item_total_price: Decimal | DecimalJsLike | number | string
    amount: number
    item_name?: string | null
  }

  export type purchase_itemUncheckedCreateWithoutItemInput = {
    purchase_item_id?: number
    purchase_id: number
    item_total_price: Decimal | DecimalJsLike | number | string
    amount: number
    item_name?: string | null
  }

  export type purchase_itemCreateOrConnectWithoutItemInput = {
    where: purchase_itemWhereUniqueInput
    create: XOR<purchase_itemCreateWithoutItemInput, purchase_itemUncheckedCreateWithoutItemInput>
  }

  export type purchase_itemCreateManyItemInputEnvelope = {
    data: purchase_itemCreateManyItemInput | purchase_itemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type item_typeUpsertWithoutItemsInput = {
    update: XOR<item_typeUpdateWithoutItemsInput, item_typeUncheckedUpdateWithoutItemsInput>
    create: XOR<item_typeCreateWithoutItemsInput, item_typeUncheckedCreateWithoutItemsInput>
    where?: item_typeWhereInput
  }

  export type item_typeUpdateToOneWithWhereWithoutItemsInput = {
    where?: item_typeWhereInput
    data: XOR<item_typeUpdateWithoutItemsInput, item_typeUncheckedUpdateWithoutItemsInput>
  }

  export type item_typeUpdateWithoutItemsInput = {
    item_type_name?: StringFieldUpdateOperationsInput | string
  }

  export type item_typeUncheckedUpdateWithoutItemsInput = {
    item_type_id?: IntFieldUpdateOperationsInput | number
    item_type_name?: StringFieldUpdateOperationsInput | string
  }

  export type countryUpsertWithoutItemsInput = {
    update: XOR<countryUpdateWithoutItemsInput, countryUncheckedUpdateWithoutItemsInput>
    create: XOR<countryCreateWithoutItemsInput, countryUncheckedCreateWithoutItemsInput>
    where?: countryWhereInput
  }

  export type countryUpdateToOneWithWhereWithoutItemsInput = {
    where?: countryWhereInput
    data: XOR<countryUpdateWithoutItemsInput, countryUncheckedUpdateWithoutItemsInput>
  }

  export type countryUpdateWithoutItemsInput = {
    country_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemProducers?: item_producerUpdateManyWithoutCountryNestedInput
  }

  export type countryUncheckedUpdateWithoutItemsInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemProducers?: item_producerUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type item_producerUpsertWithoutItemsInput = {
    update: XOR<item_producerUpdateWithoutItemsInput, item_producerUncheckedUpdateWithoutItemsInput>
    create: XOR<item_producerCreateWithoutItemsInput, item_producerUncheckedCreateWithoutItemsInput>
    where?: item_producerWhereInput
  }

  export type item_producerUpdateToOneWithWhereWithoutItemsInput = {
    where?: item_producerWhereInput
    data: XOR<item_producerUpdateWithoutItemsInput, item_producerUncheckedUpdateWithoutItemsInput>
  }

  export type item_producerUpdateWithoutItemsInput = {
    item_producer_name?: StringFieldUpdateOperationsInput | string
    country?: countryUpdateOneWithoutItemProducersNestedInput
  }

  export type item_producerUncheckedUpdateWithoutItemsInput = {
    item_producer_id?: IntFieldUpdateOperationsInput | number
    item_producer_name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type purchase_itemUpsertWithWhereUniqueWithoutItemInput = {
    where: purchase_itemWhereUniqueInput
    update: XOR<purchase_itemUpdateWithoutItemInput, purchase_itemUncheckedUpdateWithoutItemInput>
    create: XOR<purchase_itemCreateWithoutItemInput, purchase_itemUncheckedCreateWithoutItemInput>
  }

  export type purchase_itemUpdateWithWhereUniqueWithoutItemInput = {
    where: purchase_itemWhereUniqueInput
    data: XOR<purchase_itemUpdateWithoutItemInput, purchase_itemUncheckedUpdateWithoutItemInput>
  }

  export type purchase_itemUpdateManyWithWhereWithoutItemInput = {
    where: purchase_itemScalarWhereInput
    data: XOR<purchase_itemUpdateManyMutationInput, purchase_itemUncheckedUpdateManyWithoutItemInput>
  }

  export type purchase_itemScalarWhereInput = {
    AND?: purchase_itemScalarWhereInput | purchase_itemScalarWhereInput[]
    OR?: purchase_itemScalarWhereInput[]
    NOT?: purchase_itemScalarWhereInput | purchase_itemScalarWhereInput[]
    purchase_item_id?: IntFilter<"purchase_item"> | number
    purchase_id?: IntFilter<"purchase_item"> | number
    item_id?: IntNullableFilter<"purchase_item"> | number | null
    item_total_price?: DecimalFilter<"purchase_item"> | Decimal | DecimalJsLike | number | string
    amount?: IntFilter<"purchase_item"> | number
    item_name?: StringNullableFilter<"purchase_item"> | string | null
  }

  export type countryCreateWithoutItemProducersInput = {
    country_code: string
    name: string
    items?: itemCreateNestedManyWithoutCountryInput
  }

  export type countryUncheckedCreateWithoutItemProducersInput = {
    country_id?: number
    country_code: string
    name: string
    items?: itemUncheckedCreateNestedManyWithoutCountryInput
  }

  export type countryCreateOrConnectWithoutItemProducersInput = {
    where: countryWhereUniqueInput
    create: XOR<countryCreateWithoutItemProducersInput, countryUncheckedCreateWithoutItemProducersInput>
  }

  export type itemCreateWithoutItem_producerInput = {
    name: string
    value: Decimal | DecimalJsLike | number | string
    unit: string
    created_at?: Date | string
    item_type?: item_typeCreateNestedOneWithoutItemsInput
    country?: countryCreateNestedOneWithoutItemsInput
    purchaseItems?: purchase_itemCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateWithoutItem_producerInput = {
    item_id?: number
    name: string
    item_type_id?: number | null
    country_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    created_at?: Date | string
    purchaseItems?: purchase_itemUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemCreateOrConnectWithoutItem_producerInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutItem_producerInput, itemUncheckedCreateWithoutItem_producerInput>
  }

  export type itemCreateManyItem_producerInputEnvelope = {
    data: itemCreateManyItem_producerInput | itemCreateManyItem_producerInput[]
    skipDuplicates?: boolean
  }

  export type countryUpsertWithoutItemProducersInput = {
    update: XOR<countryUpdateWithoutItemProducersInput, countryUncheckedUpdateWithoutItemProducersInput>
    create: XOR<countryCreateWithoutItemProducersInput, countryUncheckedCreateWithoutItemProducersInput>
    where?: countryWhereInput
  }

  export type countryUpdateToOneWithWhereWithoutItemProducersInput = {
    where?: countryWhereInput
    data: XOR<countryUpdateWithoutItemProducersInput, countryUncheckedUpdateWithoutItemProducersInput>
  }

  export type countryUpdateWithoutItemProducersInput = {
    country_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: itemUpdateManyWithoutCountryNestedInput
  }

  export type countryUncheckedUpdateWithoutItemProducersInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    country_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type itemUpsertWithWhereUniqueWithoutItem_producerInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutItem_producerInput, itemUncheckedUpdateWithoutItem_producerInput>
    create: XOR<itemCreateWithoutItem_producerInput, itemUncheckedCreateWithoutItem_producerInput>
  }

  export type itemUpdateWithWhereUniqueWithoutItem_producerInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutItem_producerInput, itemUncheckedUpdateWithoutItem_producerInput>
  }

  export type itemUpdateManyWithWhereWithoutItem_producerInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutItem_producerInput>
  }

  export type itemScalarWhereInput = {
    AND?: itemScalarWhereInput | itemScalarWhereInput[]
    OR?: itemScalarWhereInput[]
    NOT?: itemScalarWhereInput | itemScalarWhereInput[]
    item_id?: IntFilter<"item"> | number
    name?: StringFilter<"item"> | string
    item_type_id?: IntNullableFilter<"item"> | number | null
    country_id?: IntNullableFilter<"item"> | number | null
    value?: DecimalFilter<"item"> | Decimal | DecimalJsLike | number | string
    unit?: StringFilter<"item"> | string
    item_producer_id?: IntNullableFilter<"item"> | number | null
    created_at?: DateTimeFilter<"item"> | Date | string
  }

  export type itemCreateWithoutItem_typeInput = {
    name: string
    value: Decimal | DecimalJsLike | number | string
    unit: string
    created_at?: Date | string
    country?: countryCreateNestedOneWithoutItemsInput
    item_producer?: item_producerCreateNestedOneWithoutItemsInput
    purchaseItems?: purchase_itemCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateWithoutItem_typeInput = {
    item_id?: number
    name: string
    country_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    item_producer_id?: number | null
    created_at?: Date | string
    purchaseItems?: purchase_itemUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemCreateOrConnectWithoutItem_typeInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutItem_typeInput, itemUncheckedCreateWithoutItem_typeInput>
  }

  export type itemCreateManyItem_typeInputEnvelope = {
    data: itemCreateManyItem_typeInput | itemCreateManyItem_typeInput[]
    skipDuplicates?: boolean
  }

  export type itemUpsertWithWhereUniqueWithoutItem_typeInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutItem_typeInput, itemUncheckedUpdateWithoutItem_typeInput>
    create: XOR<itemCreateWithoutItem_typeInput, itemUncheckedCreateWithoutItem_typeInput>
  }

  export type itemUpdateWithWhereUniqueWithoutItem_typeInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutItem_typeInput, itemUncheckedUpdateWithoutItem_typeInput>
  }

  export type itemUpdateManyWithWhereWithoutItem_typeInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutItem_typeInput>
  }

  export type itemCreateWithoutCountryInput = {
    name: string
    value: Decimal | DecimalJsLike | number | string
    unit: string
    created_at?: Date | string
    item_type?: item_typeCreateNestedOneWithoutItemsInput
    item_producer?: item_producerCreateNestedOneWithoutItemsInput
    purchaseItems?: purchase_itemCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateWithoutCountryInput = {
    item_id?: number
    name: string
    item_type_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    item_producer_id?: number | null
    created_at?: Date | string
    purchaseItems?: purchase_itemUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemCreateOrConnectWithoutCountryInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutCountryInput, itemUncheckedCreateWithoutCountryInput>
  }

  export type itemCreateManyCountryInputEnvelope = {
    data: itemCreateManyCountryInput | itemCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type item_producerCreateWithoutCountryInput = {
    item_producer_name: string
    items?: itemCreateNestedManyWithoutItem_producerInput
  }

  export type item_producerUncheckedCreateWithoutCountryInput = {
    item_producer_id?: number
    item_producer_name: string
    items?: itemUncheckedCreateNestedManyWithoutItem_producerInput
  }

  export type item_producerCreateOrConnectWithoutCountryInput = {
    where: item_producerWhereUniqueInput
    create: XOR<item_producerCreateWithoutCountryInput, item_producerUncheckedCreateWithoutCountryInput>
  }

  export type item_producerCreateManyCountryInputEnvelope = {
    data: item_producerCreateManyCountryInput | item_producerCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type itemUpsertWithWhereUniqueWithoutCountryInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutCountryInput, itemUncheckedUpdateWithoutCountryInput>
    create: XOR<itemCreateWithoutCountryInput, itemUncheckedCreateWithoutCountryInput>
  }

  export type itemUpdateWithWhereUniqueWithoutCountryInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutCountryInput, itemUncheckedUpdateWithoutCountryInput>
  }

  export type itemUpdateManyWithWhereWithoutCountryInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutCountryInput>
  }

  export type item_producerUpsertWithWhereUniqueWithoutCountryInput = {
    where: item_producerWhereUniqueInput
    update: XOR<item_producerUpdateWithoutCountryInput, item_producerUncheckedUpdateWithoutCountryInput>
    create: XOR<item_producerCreateWithoutCountryInput, item_producerUncheckedCreateWithoutCountryInput>
  }

  export type item_producerUpdateWithWhereUniqueWithoutCountryInput = {
    where: item_producerWhereUniqueInput
    data: XOR<item_producerUpdateWithoutCountryInput, item_producerUncheckedUpdateWithoutCountryInput>
  }

  export type item_producerUpdateManyWithWhereWithoutCountryInput = {
    where: item_producerScalarWhereInput
    data: XOR<item_producerUpdateManyMutationInput, item_producerUncheckedUpdateManyWithoutCountryInput>
  }

  export type item_producerScalarWhereInput = {
    AND?: item_producerScalarWhereInput | item_producerScalarWhereInput[]
    OR?: item_producerScalarWhereInput[]
    NOT?: item_producerScalarWhereInput | item_producerScalarWhereInput[]
    item_producer_id?: IntFilter<"item_producer"> | number
    item_producer_name?: StringFilter<"item_producer"> | string
    country_id?: IntNullableFilter<"item_producer"> | number | null
  }

  export type userCreateWithoutStoresInput = {
    user_name: string
    password_hash: string
    email?: string | null
    created_at?: Date | string
    last_login?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    is_admin?: boolean
    purchases?: purchaseCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutStoresInput = {
    user_id?: number
    user_name: string
    password_hash: string
    email?: string | null
    created_at?: Date | string
    last_login?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    is_admin?: boolean
    purchases?: purchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutStoresInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutStoresInput, userUncheckedCreateWithoutStoresInput>
  }

  export type purchaseCreateWithoutStoreInput = {
    purchased_at: Date | string
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
    user: userCreateNestedOneWithoutPurchasesInput
  }

  export type purchaseUncheckedCreateWithoutStoreInput = {
    purchase_id?: number
    user_id: number
    purchased_at: Date | string
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
  }

  export type purchaseCreateOrConnectWithoutStoreInput = {
    where: purchaseWhereUniqueInput
    create: XOR<purchaseCreateWithoutStoreInput, purchaseUncheckedCreateWithoutStoreInput>
  }

  export type purchaseCreateManyStoreInputEnvelope = {
    data: purchaseCreateManyStoreInput | purchaseCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutStoresInput = {
    update: XOR<userUpdateWithoutStoresInput, userUncheckedUpdateWithoutStoresInput>
    create: XOR<userCreateWithoutStoresInput, userUncheckedCreateWithoutStoresInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutStoresInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutStoresInput, userUncheckedUpdateWithoutStoresInput>
  }

  export type userUpdateWithoutStoresInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    purchases?: purchaseUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutStoresInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    purchases?: purchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type purchaseUpsertWithWhereUniqueWithoutStoreInput = {
    where: purchaseWhereUniqueInput
    update: XOR<purchaseUpdateWithoutStoreInput, purchaseUncheckedUpdateWithoutStoreInput>
    create: XOR<purchaseCreateWithoutStoreInput, purchaseUncheckedCreateWithoutStoreInput>
  }

  export type purchaseUpdateWithWhereUniqueWithoutStoreInput = {
    where: purchaseWhereUniqueInput
    data: XOR<purchaseUpdateWithoutStoreInput, purchaseUncheckedUpdateWithoutStoreInput>
  }

  export type purchaseUpdateManyWithWhereWithoutStoreInput = {
    where: purchaseScalarWhereInput
    data: XOR<purchaseUpdateManyMutationInput, purchaseUncheckedUpdateManyWithoutStoreInput>
  }

  export type purchaseCreateManyUserInput = {
    purchase_id?: number
    purchased_at: Date | string
    store_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
  }

  export type storeCreateManyUserInput = {
    store_id?: number
    name: string
    location: string
  }

  export type purchaseUpdateWithoutUserInput = {
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
    store?: storeUpdateOneWithoutPurchasesNestedInput
  }

  export type purchaseUncheckedUpdateWithoutUserInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
  }

  export type purchaseUncheckedUpdateManyWithoutUserInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
  }

  export type storeUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    purchases?: purchaseUpdateManyWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateWithoutUserInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    purchases?: purchaseUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateManyWithoutUserInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type purchase_itemCreateManyItemInput = {
    purchase_item_id?: number
    purchase_id: number
    item_total_price: Decimal | DecimalJsLike | number | string
    amount: number
    item_name?: string | null
  }

  export type purchase_itemUpdateWithoutItemInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    item_total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: IntFieldUpdateOperationsInput | number
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type purchase_itemUncheckedUpdateWithoutItemInput = {
    purchase_item_id?: IntFieldUpdateOperationsInput | number
    purchase_id?: IntFieldUpdateOperationsInput | number
    item_total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: IntFieldUpdateOperationsInput | number
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type purchase_itemUncheckedUpdateManyWithoutItemInput = {
    purchase_item_id?: IntFieldUpdateOperationsInput | number
    purchase_id?: IntFieldUpdateOperationsInput | number
    item_total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: IntFieldUpdateOperationsInput | number
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemCreateManyItem_producerInput = {
    item_id?: number
    name: string
    item_type_id?: number | null
    country_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    created_at?: Date | string
  }

  export type itemUpdateWithoutItem_producerInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item_type?: item_typeUpdateOneWithoutItemsNestedInput
    country?: countryUpdateOneWithoutItemsNestedInput
    purchaseItems?: purchase_itemUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateWithoutItem_producerInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: purchase_itemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateManyWithoutItem_producerInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type itemCreateManyItem_typeInput = {
    item_id?: number
    name: string
    country_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    item_producer_id?: number | null
    created_at?: Date | string
  }

  export type itemUpdateWithoutItem_typeInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: countryUpdateOneWithoutItemsNestedInput
    item_producer?: item_producerUpdateOneWithoutItemsNestedInput
    purchaseItems?: purchase_itemUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateWithoutItem_typeInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    item_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: purchase_itemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateManyWithoutItem_typeInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    item_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type itemCreateManyCountryInput = {
    item_id?: number
    name: string
    item_type_id?: number | null
    value: Decimal | DecimalJsLike | number | string
    unit: string
    item_producer_id?: number | null
    created_at?: Date | string
  }

  export type item_producerCreateManyCountryInput = {
    item_producer_id?: number
    item_producer_name: string
  }

  export type itemUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item_type?: item_typeUpdateOneWithoutItemsNestedInput
    item_producer?: item_producerUpdateOneWithoutItemsNestedInput
    purchaseItems?: purchase_itemUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateWithoutCountryInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    item_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: purchase_itemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateManyWithoutCountryInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    item_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: StringFieldUpdateOperationsInput | string
    item_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type item_producerUpdateWithoutCountryInput = {
    item_producer_name?: StringFieldUpdateOperationsInput | string
    items?: itemUpdateManyWithoutItem_producerNestedInput
  }

  export type item_producerUncheckedUpdateWithoutCountryInput = {
    item_producer_id?: IntFieldUpdateOperationsInput | number
    item_producer_name?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutItem_producerNestedInput
  }

  export type item_producerUncheckedUpdateManyWithoutCountryInput = {
    item_producer_id?: IntFieldUpdateOperationsInput | number
    item_producer_name?: StringFieldUpdateOperationsInput | string
  }

  export type purchaseCreateManyStoreInput = {
    purchase_id?: number
    user_id: number
    purchased_at: Date | string
    total_price?: Decimal | DecimalJsLike | number | string
    item_count?: number
  }

  export type purchaseUpdateWithoutStoreInput = {
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type purchaseUncheckedUpdateWithoutStoreInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
  }

  export type purchaseUncheckedUpdateManyWithoutStoreInput = {
    purchase_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_count?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}