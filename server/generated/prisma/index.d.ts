
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ParkingSpace
 * 
 */
export type ParkingSpace = $Result.DefaultSelection<Prisma.$ParkingSpacePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  DRIVER: 'DRIVER',
  PROVIDER: 'PROVIDER',
  BOTH: 'BOTH'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const RefundStatus: {
  PENDING: 'PENDING',
  PROCESSED: 'PROCESSED',
  FAILED: 'FAILED'
};

export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type RefundStatus = $Enums.RefundStatus

export const RefundStatus: typeof $Enums.RefundStatus

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

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSpace`: Exposes CRUD operations for the **ParkingSpace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSpaces
    * const parkingSpaces = await prisma.parkingSpace.findMany()
    * ```
    */
  get parkingSpace(): Prisma.ParkingSpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    ParkingSpace: 'ParkingSpace',
    Booking: 'Booking'
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
      modelProps: "user" | "parkingSpace" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ParkingSpace: {
        payload: Prisma.$ParkingSpacePayload<ExtArgs>
        fields: Prisma.ParkingSpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          findFirst: {
            args: Prisma.ParkingSpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          findMany: {
            args: Prisma.ParkingSpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>[]
          }
          create: {
            args: Prisma.ParkingSpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          createMany: {
            args: Prisma.ParkingSpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>[]
          }
          delete: {
            args: Prisma.ParkingSpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          update: {
            args: Prisma.ParkingSpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          deleteMany: {
            args: Prisma.ParkingSpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>[]
          }
          upsert: {
            args: Prisma.ParkingSpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpacePayload>
          }
          aggregate: {
            args: Prisma.ParkingSpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSpace>
          }
          groupBy: {
            args: Prisma.ParkingSpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSpaceCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSpaceCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    user?: UserOmit
    parkingSpace?: ParkingSpaceOmit
    booking?: BookingOmit
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
    parkingSpaces: number
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSpaces?: boolean | UserCountOutputTypeCountParkingSpacesArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
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
  export type UserCountOutputTypeCountParkingSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type ParkingSpaceCountOutputType
   */

  export type ParkingSpaceCountOutputType = {
    bookings: number
  }

  export type ParkingSpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ParkingSpaceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ParkingSpaceCountOutputType without action
   */
  export type ParkingSpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpaceCountOutputType
     */
    select?: ParkingSpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSpaceCountOutputType without action
   */
  export type ParkingSpaceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string | null
    role: $Enums.UserRole
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    parkingSpaces?: boolean | User$parkingSpacesArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSpaces?: boolean | User$parkingSpacesArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parkingSpaces: Prisma.$ParkingSpacePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string | null
      role: $Enums.UserRole
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingSpaces<T extends User$parkingSpacesArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingSpacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.parkingSpaces
   */
  export type User$parkingSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    where?: ParkingSpaceWhereInput
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    cursor?: ParkingSpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSpaceScalarFieldEnum | ParkingSpaceScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSpace
   */

  export type AggregateParkingSpace = {
    _count: ParkingSpaceCountAggregateOutputType | null
    _avg: ParkingSpaceAvgAggregateOutputType | null
    _sum: ParkingSpaceSumAggregateOutputType | null
    _min: ParkingSpaceMinAggregateOutputType | null
    _max: ParkingSpaceMaxAggregateOutputType | null
  }

  export type ParkingSpaceAvgAggregateOutputType = {
    id: number | null
    pricePerHour: number | null
    latitude: number | null
    longitude: number | null
    ownerId: number | null
  }

  export type ParkingSpaceSumAggregateOutputType = {
    id: number | null
    pricePerHour: number | null
    latitude: number | null
    longitude: number | null
    ownerId: number | null
  }

  export type ParkingSpaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    area: string | null
    pricePerHour: number | null
    covered: boolean | null
    evCharging: boolean | null
    access24x7: boolean | null
    available: boolean | null
    latitude: number | null
    longitude: number | null
    contactPhone: string | null
    ownerId: number | null
    createdAt: Date | null
  }

  export type ParkingSpaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    area: string | null
    pricePerHour: number | null
    covered: boolean | null
    evCharging: boolean | null
    access24x7: boolean | null
    available: boolean | null
    latitude: number | null
    longitude: number | null
    contactPhone: string | null
    ownerId: number | null
    createdAt: Date | null
  }

  export type ParkingSpaceCountAggregateOutputType = {
    id: number
    name: number
    address: number
    area: number
    pricePerHour: number
    covered: number
    evCharging: number
    access24x7: number
    available: number
    latitude: number
    longitude: number
    contactPhone: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type ParkingSpaceAvgAggregateInputType = {
    id?: true
    pricePerHour?: true
    latitude?: true
    longitude?: true
    ownerId?: true
  }

  export type ParkingSpaceSumAggregateInputType = {
    id?: true
    pricePerHour?: true
    latitude?: true
    longitude?: true
    ownerId?: true
  }

  export type ParkingSpaceMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    area?: true
    pricePerHour?: true
    covered?: true
    evCharging?: true
    access24x7?: true
    available?: true
    latitude?: true
    longitude?: true
    contactPhone?: true
    ownerId?: true
    createdAt?: true
  }

  export type ParkingSpaceMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    area?: true
    pricePerHour?: true
    covered?: true
    evCharging?: true
    access24x7?: true
    available?: true
    latitude?: true
    longitude?: true
    contactPhone?: true
    ownerId?: true
    createdAt?: true
  }

  export type ParkingSpaceCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    area?: true
    pricePerHour?: true
    covered?: true
    evCharging?: true
    access24x7?: true
    available?: true
    latitude?: true
    longitude?: true
    contactPhone?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type ParkingSpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpace to aggregate.
     */
    where?: ParkingSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpaces to fetch.
     */
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSpaces
    **/
    _count?: true | ParkingSpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSpaceMaxAggregateInputType
  }

  export type GetParkingSpaceAggregateType<T extends ParkingSpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSpace[P]>
      : GetScalarType<T[P], AggregateParkingSpace[P]>
  }




  export type ParkingSpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpaceWhereInput
    orderBy?: ParkingSpaceOrderByWithAggregationInput | ParkingSpaceOrderByWithAggregationInput[]
    by: ParkingSpaceScalarFieldEnum[] | ParkingSpaceScalarFieldEnum
    having?: ParkingSpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSpaceCountAggregateInputType | true
    _avg?: ParkingSpaceAvgAggregateInputType
    _sum?: ParkingSpaceSumAggregateInputType
    _min?: ParkingSpaceMinAggregateInputType
    _max?: ParkingSpaceMaxAggregateInputType
  }

  export type ParkingSpaceGroupByOutputType = {
    id: number
    name: string
    address: string
    area: string
    pricePerHour: number
    covered: boolean
    evCharging: boolean
    access24x7: boolean
    available: boolean
    latitude: number | null
    longitude: number | null
    contactPhone: string | null
    ownerId: number
    createdAt: Date
    _count: ParkingSpaceCountAggregateOutputType | null
    _avg: ParkingSpaceAvgAggregateOutputType | null
    _sum: ParkingSpaceSumAggregateOutputType | null
    _min: ParkingSpaceMinAggregateOutputType | null
    _max: ParkingSpaceMaxAggregateOutputType | null
  }

  type GetParkingSpaceGroupByPayload<T extends ParkingSpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSpaceGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSpaceGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    area?: boolean
    pricePerHour?: boolean
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: boolean
    longitude?: boolean
    contactPhone?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | ParkingSpace$bookingsArgs<ExtArgs>
    _count?: boolean | ParkingSpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpace"]>

  export type ParkingSpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    area?: boolean
    pricePerHour?: boolean
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: boolean
    longitude?: boolean
    contactPhone?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpace"]>

  export type ParkingSpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    area?: boolean
    pricePerHour?: boolean
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: boolean
    longitude?: boolean
    contactPhone?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpace"]>

  export type ParkingSpaceSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    area?: boolean
    pricePerHour?: boolean
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: boolean
    longitude?: boolean
    contactPhone?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type ParkingSpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "area" | "pricePerHour" | "covered" | "evCharging" | "access24x7" | "available" | "latitude" | "longitude" | "contactPhone" | "ownerId" | "createdAt", ExtArgs["result"]["parkingSpace"]>
  export type ParkingSpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | ParkingSpace$bookingsArgs<ExtArgs>
    _count?: boolean | ParkingSpaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingSpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkingSpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSpace"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      area: string
      pricePerHour: number
      covered: boolean
      evCharging: boolean
      access24x7: boolean
      available: boolean
      latitude: number | null
      longitude: number | null
      contactPhone: string | null
      ownerId: number
      createdAt: Date
    }, ExtArgs["result"]["parkingSpace"]>
    composites: {}
  }

  type ParkingSpaceGetPayload<S extends boolean | null | undefined | ParkingSpaceDefaultArgs> = $Result.GetResult<Prisma.$ParkingSpacePayload, S>

  type ParkingSpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSpaceCountAggregateInputType | true
    }

  export interface ParkingSpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSpace'], meta: { name: 'ParkingSpace' } }
    /**
     * Find zero or one ParkingSpace that matches the filter.
     * @param {ParkingSpaceFindUniqueArgs} args - Arguments to find a ParkingSpace
     * @example
     * // Get one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSpaceFindUniqueArgs>(args: SelectSubset<T, ParkingSpaceFindUniqueArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSpace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSpaceFindUniqueOrThrowArgs} args - Arguments to find a ParkingSpace
     * @example
     * // Get one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceFindFirstArgs} args - Arguments to find a ParkingSpace
     * @example
     * // Get one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSpaceFindFirstArgs>(args?: SelectSubset<T, ParkingSpaceFindFirstArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSpace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceFindFirstOrThrowArgs} args - Arguments to find a ParkingSpace
     * @example
     * // Get one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSpaces
     * const parkingSpaces = await prisma.parkingSpace.findMany()
     * 
     * // Get first 10 ParkingSpaces
     * const parkingSpaces = await prisma.parkingSpace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSpaceWithIdOnly = await prisma.parkingSpace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSpaceFindManyArgs>(args?: SelectSubset<T, ParkingSpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSpace.
     * @param {ParkingSpaceCreateArgs} args - Arguments to create a ParkingSpace.
     * @example
     * // Create one ParkingSpace
     * const ParkingSpace = await prisma.parkingSpace.create({
     *   data: {
     *     // ... data to create a ParkingSpace
     *   }
     * })
     * 
     */
    create<T extends ParkingSpaceCreateArgs>(args: SelectSubset<T, ParkingSpaceCreateArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSpaces.
     * @param {ParkingSpaceCreateManyArgs} args - Arguments to create many ParkingSpaces.
     * @example
     * // Create many ParkingSpaces
     * const parkingSpace = await prisma.parkingSpace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSpaceCreateManyArgs>(args?: SelectSubset<T, ParkingSpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSpaces and returns the data saved in the database.
     * @param {ParkingSpaceCreateManyAndReturnArgs} args - Arguments to create many ParkingSpaces.
     * @example
     * // Create many ParkingSpaces
     * const parkingSpace = await prisma.parkingSpace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSpaces and only return the `id`
     * const parkingSpaceWithIdOnly = await prisma.parkingSpace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSpace.
     * @param {ParkingSpaceDeleteArgs} args - Arguments to delete one ParkingSpace.
     * @example
     * // Delete one ParkingSpace
     * const ParkingSpace = await prisma.parkingSpace.delete({
     *   where: {
     *     // ... filter to delete one ParkingSpace
     *   }
     * })
     * 
     */
    delete<T extends ParkingSpaceDeleteArgs>(args: SelectSubset<T, ParkingSpaceDeleteArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSpace.
     * @param {ParkingSpaceUpdateArgs} args - Arguments to update one ParkingSpace.
     * @example
     * // Update one ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSpaceUpdateArgs>(args: SelectSubset<T, ParkingSpaceUpdateArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSpaces.
     * @param {ParkingSpaceDeleteManyArgs} args - Arguments to filter ParkingSpaces to delete.
     * @example
     * // Delete a few ParkingSpaces
     * const { count } = await prisma.parkingSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSpaceDeleteManyArgs>(args?: SelectSubset<T, ParkingSpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSpaces
     * const parkingSpace = await prisma.parkingSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSpaceUpdateManyArgs>(args: SelectSubset<T, ParkingSpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSpaces and returns the data updated in the database.
     * @param {ParkingSpaceUpdateManyAndReturnArgs} args - Arguments to update many ParkingSpaces.
     * @example
     * // Update many ParkingSpaces
     * const parkingSpace = await prisma.parkingSpace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSpaces and only return the `id`
     * const parkingSpaceWithIdOnly = await prisma.parkingSpace.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ParkingSpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSpace.
     * @param {ParkingSpaceUpsertArgs} args - Arguments to update or create a ParkingSpace.
     * @example
     * // Update or create a ParkingSpace
     * const parkingSpace = await prisma.parkingSpace.upsert({
     *   create: {
     *     // ... data to create a ParkingSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSpace we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSpaceUpsertArgs>(args: SelectSubset<T, ParkingSpaceUpsertArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceCountArgs} args - Arguments to filter ParkingSpaces to count.
     * @example
     * // Count the number of ParkingSpaces
     * const count = await prisma.parkingSpace.count({
     *   where: {
     *     // ... the filter for the ParkingSpaces we want to count
     *   }
     * })
    **/
    count<T extends ParkingSpaceCountArgs>(
      args?: Subset<T, ParkingSpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingSpaceAggregateArgs>(args: Subset<T, ParkingSpaceAggregateArgs>): Prisma.PrismaPromise<GetParkingSpaceAggregateType<T>>

    /**
     * Group by ParkingSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpaceGroupByArgs} args - Group by arguments.
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
      T extends ParkingSpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSpaceGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSpaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSpace model
   */
  readonly fields: ParkingSpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSpace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends ParkingSpace$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpace$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ParkingSpace model
   */
  interface ParkingSpaceFieldRefs {
    readonly id: FieldRef<"ParkingSpace", 'Int'>
    readonly name: FieldRef<"ParkingSpace", 'String'>
    readonly address: FieldRef<"ParkingSpace", 'String'>
    readonly area: FieldRef<"ParkingSpace", 'String'>
    readonly pricePerHour: FieldRef<"ParkingSpace", 'Float'>
    readonly covered: FieldRef<"ParkingSpace", 'Boolean'>
    readonly evCharging: FieldRef<"ParkingSpace", 'Boolean'>
    readonly access24x7: FieldRef<"ParkingSpace", 'Boolean'>
    readonly available: FieldRef<"ParkingSpace", 'Boolean'>
    readonly latitude: FieldRef<"ParkingSpace", 'Float'>
    readonly longitude: FieldRef<"ParkingSpace", 'Float'>
    readonly contactPhone: FieldRef<"ParkingSpace", 'String'>
    readonly ownerId: FieldRef<"ParkingSpace", 'Int'>
    readonly createdAt: FieldRef<"ParkingSpace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSpace findUnique
   */
  export type ParkingSpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpace to fetch.
     */
    where: ParkingSpaceWhereUniqueInput
  }

  /**
   * ParkingSpace findUniqueOrThrow
   */
  export type ParkingSpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpace to fetch.
     */
    where: ParkingSpaceWhereUniqueInput
  }

  /**
   * ParkingSpace findFirst
   */
  export type ParkingSpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpace to fetch.
     */
    where?: ParkingSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpaces to fetch.
     */
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpaces.
     */
    cursor?: ParkingSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpaces.
     */
    distinct?: ParkingSpaceScalarFieldEnum | ParkingSpaceScalarFieldEnum[]
  }

  /**
   * ParkingSpace findFirstOrThrow
   */
  export type ParkingSpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpace to fetch.
     */
    where?: ParkingSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpaces to fetch.
     */
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpaces.
     */
    cursor?: ParkingSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpaces.
     */
    distinct?: ParkingSpaceScalarFieldEnum | ParkingSpaceScalarFieldEnum[]
  }

  /**
   * ParkingSpace findMany
   */
  export type ParkingSpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpaces to fetch.
     */
    where?: ParkingSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpaces to fetch.
     */
    orderBy?: ParkingSpaceOrderByWithRelationInput | ParkingSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSpaces.
     */
    cursor?: ParkingSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpaces.
     */
    distinct?: ParkingSpaceScalarFieldEnum | ParkingSpaceScalarFieldEnum[]
  }

  /**
   * ParkingSpace create
   */
  export type ParkingSpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSpace.
     */
    data: XOR<ParkingSpaceCreateInput, ParkingSpaceUncheckedCreateInput>
  }

  /**
   * ParkingSpace createMany
   */
  export type ParkingSpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSpaces.
     */
    data: ParkingSpaceCreateManyInput | ParkingSpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSpace createManyAndReturn
   */
  export type ParkingSpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSpaces.
     */
    data: ParkingSpaceCreateManyInput | ParkingSpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSpace update
   */
  export type ParkingSpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSpace.
     */
    data: XOR<ParkingSpaceUpdateInput, ParkingSpaceUncheckedUpdateInput>
    /**
     * Choose, which ParkingSpace to update.
     */
    where: ParkingSpaceWhereUniqueInput
  }

  /**
   * ParkingSpace updateMany
   */
  export type ParkingSpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSpaces.
     */
    data: XOR<ParkingSpaceUpdateManyMutationInput, ParkingSpaceUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSpaces to update
     */
    where?: ParkingSpaceWhereInput
    /**
     * Limit how many ParkingSpaces to update.
     */
    limit?: number
  }

  /**
   * ParkingSpace updateManyAndReturn
   */
  export type ParkingSpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSpaces.
     */
    data: XOR<ParkingSpaceUpdateManyMutationInput, ParkingSpaceUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSpaces to update
     */
    where?: ParkingSpaceWhereInput
    /**
     * Limit how many ParkingSpaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSpace upsert
   */
  export type ParkingSpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSpace to update in case it exists.
     */
    where: ParkingSpaceWhereUniqueInput
    /**
     * In case the ParkingSpace found by the `where` argument doesn't exist, create a new ParkingSpace with this data.
     */
    create: XOR<ParkingSpaceCreateInput, ParkingSpaceUncheckedCreateInput>
    /**
     * In case the ParkingSpace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSpaceUpdateInput, ParkingSpaceUncheckedUpdateInput>
  }

  /**
   * ParkingSpace delete
   */
  export type ParkingSpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
    /**
     * Filter which ParkingSpace to delete.
     */
    where: ParkingSpaceWhereUniqueInput
  }

  /**
   * ParkingSpace deleteMany
   */
  export type ParkingSpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpaces to delete
     */
    where?: ParkingSpaceWhereInput
    /**
     * Limit how many ParkingSpaces to delete.
     */
    limit?: number
  }

  /**
   * ParkingSpace.bookings
   */
  export type ParkingSpace$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ParkingSpace without action
   */
  export type ParkingSpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpace
     */
    select?: ParkingSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpace
     */
    omit?: ParkingSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpaceInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    parkingSpaceId: number | null
    durationHours: number | null
    totalPrice: number | null
    amountPaise: number | null
    refundAmountPaise: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    parkingSpaceId: number | null
    durationHours: number | null
    totalPrice: number | null
    amountPaise: number | null
    refundAmountPaise: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    parkingSpaceId: number | null
    bookingDate: Date | null
    startTime: string | null
    durationHours: number | null
    totalPrice: number | null
    startAt: Date | null
    endAt: Date | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    amountPaise: number | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    razorpayRefundId: string | null
    refundStatus: $Enums.RefundStatus | null
    refundAmountPaise: number | null
    refundProcessedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    parkingSpaceId: number | null
    bookingDate: Date | null
    startTime: string | null
    durationHours: number | null
    totalPrice: number | null
    startAt: Date | null
    endAt: Date | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    amountPaise: number | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    razorpayRefundId: string | null
    refundStatus: $Enums.RefundStatus | null
    refundAmountPaise: number | null
    refundProcessedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    parkingSpaceId: number
    bookingDate: number
    startTime: number
    durationHours: number
    totalPrice: number
    startAt: number
    endAt: number
    status: number
    paymentStatus: number
    amountPaise: number
    razorpayOrderId: number
    razorpayPaymentId: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    razorpayRefundId: number
    refundStatus: number
    refundAmountPaise: number
    refundProcessedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    userId?: true
    parkingSpaceId?: true
    durationHours?: true
    totalPrice?: true
    amountPaise?: true
    refundAmountPaise?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    userId?: true
    parkingSpaceId?: true
    durationHours?: true
    totalPrice?: true
    amountPaise?: true
    refundAmountPaise?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    parkingSpaceId?: true
    bookingDate?: true
    startTime?: true
    durationHours?: true
    totalPrice?: true
    startAt?: true
    endAt?: true
    status?: true
    paymentStatus?: true
    amountPaise?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    razorpayRefundId?: true
    refundStatus?: true
    refundAmountPaise?: true
    refundProcessedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    parkingSpaceId?: true
    bookingDate?: true
    startTime?: true
    durationHours?: true
    totalPrice?: true
    startAt?: true
    endAt?: true
    status?: true
    paymentStatus?: true
    amountPaise?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    razorpayRefundId?: true
    refundStatus?: true
    refundAmountPaise?: true
    refundProcessedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    parkingSpaceId?: true
    bookingDate?: true
    startTime?: true
    durationHours?: true
    totalPrice?: true
    startAt?: true
    endAt?: true
    status?: true
    paymentStatus?: true
    amountPaise?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    razorpayRefundId?: true
    refundStatus?: true
    refundAmountPaise?: true
    refundProcessedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    userId: number
    parkingSpaceId: number
    bookingDate: Date
    startTime: string
    durationHours: number
    totalPrice: number
    startAt: Date | null
    endAt: Date | null
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    amountPaise: number | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    createdAt: Date
    updatedAt: Date
    expiresAt: Date | null
    razorpayRefundId: string | null
    refundStatus: $Enums.RefundStatus | null
    refundAmountPaise: number | null
    refundProcessedAt: Date | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parkingSpaceId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    durationHours?: boolean
    totalPrice?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    paymentStatus?: boolean
    amountPaise?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    razorpayRefundId?: boolean
    refundStatus?: boolean
    refundAmountPaise?: boolean
    refundProcessedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingSpace?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parkingSpaceId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    durationHours?: boolean
    totalPrice?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    paymentStatus?: boolean
    amountPaise?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    razorpayRefundId?: boolean
    refundStatus?: boolean
    refundAmountPaise?: boolean
    refundProcessedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingSpace?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parkingSpaceId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    durationHours?: boolean
    totalPrice?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    paymentStatus?: boolean
    amountPaise?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    razorpayRefundId?: boolean
    refundStatus?: boolean
    refundAmountPaise?: boolean
    refundProcessedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingSpace?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    parkingSpaceId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    durationHours?: boolean
    totalPrice?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    paymentStatus?: boolean
    amountPaise?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    razorpayRefundId?: boolean
    refundStatus?: boolean
    refundAmountPaise?: boolean
    refundProcessedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "parkingSpaceId" | "bookingDate" | "startTime" | "durationHours" | "totalPrice" | "startAt" | "endAt" | "status" | "paymentStatus" | "amountPaise" | "razorpayOrderId" | "razorpayPaymentId" | "createdAt" | "updatedAt" | "expiresAt" | "razorpayRefundId" | "refundStatus" | "refundAmountPaise" | "refundProcessedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingSpace?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingSpace?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingSpace?: boolean | ParkingSpaceDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parkingSpace: Prisma.$ParkingSpacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      parkingSpaceId: number
      bookingDate: Date
      startTime: string
      durationHours: number
      totalPrice: number
      startAt: Date | null
      endAt: Date | null
      status: $Enums.BookingStatus
      paymentStatus: $Enums.PaymentStatus
      amountPaise: number | null
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      createdAt: Date
      updatedAt: Date
      expiresAt: Date | null
      razorpayRefundId: string | null
      refundStatus: $Enums.RefundStatus | null
      refundAmountPaise: number | null
      refundProcessedAt: Date | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingSpace<T extends ParkingSpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpaceDefaultArgs<ExtArgs>>): Prisma__ParkingSpaceClient<$Result.GetResult<Prisma.$ParkingSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly parkingSpaceId: FieldRef<"Booking", 'Int'>
    readonly bookingDate: FieldRef<"Booking", 'DateTime'>
    readonly startTime: FieldRef<"Booking", 'String'>
    readonly durationHours: FieldRef<"Booking", 'Int'>
    readonly totalPrice: FieldRef<"Booking", 'Float'>
    readonly startAt: FieldRef<"Booking", 'DateTime'>
    readonly endAt: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly paymentStatus: FieldRef<"Booking", 'PaymentStatus'>
    readonly amountPaise: FieldRef<"Booking", 'Int'>
    readonly razorpayOrderId: FieldRef<"Booking", 'String'>
    readonly razorpayPaymentId: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
    readonly expiresAt: FieldRef<"Booking", 'DateTime'>
    readonly razorpayRefundId: FieldRef<"Booking", 'String'>
    readonly refundStatus: FieldRef<"Booking", 'RefundStatus'>
    readonly refundAmountPaise: FieldRef<"Booking", 'Int'>
    readonly refundProcessedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
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
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParkingSpaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    area: 'area',
    pricePerHour: 'pricePerHour',
    covered: 'covered',
    evCharging: 'evCharging',
    access24x7: 'access24x7',
    available: 'available',
    latitude: 'latitude',
    longitude: 'longitude',
    contactPhone: 'contactPhone',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type ParkingSpaceScalarFieldEnum = (typeof ParkingSpaceScalarFieldEnum)[keyof typeof ParkingSpaceScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    parkingSpaceId: 'parkingSpaceId',
    bookingDate: 'bookingDate',
    startTime: 'startTime',
    durationHours: 'durationHours',
    totalPrice: 'totalPrice',
    startAt: 'startAt',
    endAt: 'endAt',
    status: 'status',
    paymentStatus: 'paymentStatus',
    amountPaise: 'amountPaise',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    razorpayRefundId: 'razorpayRefundId',
    refundStatus: 'refundStatus',
    refundAmountPaise: 'refundAmountPaise',
    refundProcessedAt: 'refundProcessedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'RefundStatus'
   */
  export type EnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus'>
    


  /**
   * Reference to a field of type 'RefundStatus[]'
   */
  export type ListEnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    parkingSpaces?: ParkingSpaceListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parkingSpaces?: ParkingSpaceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    parkingSpaces?: ParkingSpaceListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ParkingSpaceWhereInput = {
    AND?: ParkingSpaceWhereInput | ParkingSpaceWhereInput[]
    OR?: ParkingSpaceWhereInput[]
    NOT?: ParkingSpaceWhereInput | ParkingSpaceWhereInput[]
    id?: IntFilter<"ParkingSpace"> | number
    name?: StringFilter<"ParkingSpace"> | string
    address?: StringFilter<"ParkingSpace"> | string
    area?: StringFilter<"ParkingSpace"> | string
    pricePerHour?: FloatFilter<"ParkingSpace"> | number
    covered?: BoolFilter<"ParkingSpace"> | boolean
    evCharging?: BoolFilter<"ParkingSpace"> | boolean
    access24x7?: BoolFilter<"ParkingSpace"> | boolean
    available?: BoolFilter<"ParkingSpace"> | boolean
    latitude?: FloatNullableFilter<"ParkingSpace"> | number | null
    longitude?: FloatNullableFilter<"ParkingSpace"> | number | null
    contactPhone?: StringNullableFilter<"ParkingSpace"> | string | null
    ownerId?: IntFilter<"ParkingSpace"> | number
    createdAt?: DateTimeFilter<"ParkingSpace"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type ParkingSpaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    pricePerHour?: SortOrder
    covered?: SortOrder
    evCharging?: SortOrder
    access24x7?: SortOrder
    available?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ParkingSpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingSpaceWhereInput | ParkingSpaceWhereInput[]
    OR?: ParkingSpaceWhereInput[]
    NOT?: ParkingSpaceWhereInput | ParkingSpaceWhereInput[]
    name?: StringFilter<"ParkingSpace"> | string
    address?: StringFilter<"ParkingSpace"> | string
    area?: StringFilter<"ParkingSpace"> | string
    pricePerHour?: FloatFilter<"ParkingSpace"> | number
    covered?: BoolFilter<"ParkingSpace"> | boolean
    evCharging?: BoolFilter<"ParkingSpace"> | boolean
    access24x7?: BoolFilter<"ParkingSpace"> | boolean
    available?: BoolFilter<"ParkingSpace"> | boolean
    latitude?: FloatNullableFilter<"ParkingSpace"> | number | null
    longitude?: FloatNullableFilter<"ParkingSpace"> | number | null
    contactPhone?: StringNullableFilter<"ParkingSpace"> | string | null
    ownerId?: IntFilter<"ParkingSpace"> | number
    createdAt?: DateTimeFilter<"ParkingSpace"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type ParkingSpaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    pricePerHour?: SortOrder
    covered?: SortOrder
    evCharging?: SortOrder
    access24x7?: SortOrder
    available?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: ParkingSpaceCountOrderByAggregateInput
    _avg?: ParkingSpaceAvgOrderByAggregateInput
    _max?: ParkingSpaceMaxOrderByAggregateInput
    _min?: ParkingSpaceMinOrderByAggregateInput
    _sum?: ParkingSpaceSumOrderByAggregateInput
  }

  export type ParkingSpaceScalarWhereWithAggregatesInput = {
    AND?: ParkingSpaceScalarWhereWithAggregatesInput | ParkingSpaceScalarWhereWithAggregatesInput[]
    OR?: ParkingSpaceScalarWhereWithAggregatesInput[]
    NOT?: ParkingSpaceScalarWhereWithAggregatesInput | ParkingSpaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingSpace"> | number
    name?: StringWithAggregatesFilter<"ParkingSpace"> | string
    address?: StringWithAggregatesFilter<"ParkingSpace"> | string
    area?: StringWithAggregatesFilter<"ParkingSpace"> | string
    pricePerHour?: FloatWithAggregatesFilter<"ParkingSpace"> | number
    covered?: BoolWithAggregatesFilter<"ParkingSpace"> | boolean
    evCharging?: BoolWithAggregatesFilter<"ParkingSpace"> | boolean
    access24x7?: BoolWithAggregatesFilter<"ParkingSpace"> | boolean
    available?: BoolWithAggregatesFilter<"ParkingSpace"> | boolean
    latitude?: FloatNullableWithAggregatesFilter<"ParkingSpace"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"ParkingSpace"> | number | null
    contactPhone?: StringNullableWithAggregatesFilter<"ParkingSpace"> | string | null
    ownerId?: IntWithAggregatesFilter<"ParkingSpace"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ParkingSpace"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    parkingSpaceId?: IntFilter<"Booking"> | number
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    startTime?: StringFilter<"Booking"> | string
    durationHours?: IntFilter<"Booking"> | number
    totalPrice?: FloatFilter<"Booking"> | number
    startAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    endAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    amountPaise?: IntNullableFilter<"Booking"> | number | null
    razorpayOrderId?: StringNullableFilter<"Booking"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    razorpayRefundId?: StringNullableFilter<"Booking"> | string | null
    refundStatus?: EnumRefundStatusNullableFilter<"Booking"> | $Enums.RefundStatus | null
    refundAmountPaise?: IntNullableFilter<"Booking"> | number | null
    refundProcessedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parkingSpace?: XOR<ParkingSpaceScalarRelationFilter, ParkingSpaceWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingSpaceId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    durationHours?: SortOrder
    totalPrice?: SortOrder
    startAt?: SortOrderInput | SortOrder
    endAt?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaise?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    razorpayRefundId?: SortOrderInput | SortOrder
    refundStatus?: SortOrderInput | SortOrder
    refundAmountPaise?: SortOrderInput | SortOrder
    refundProcessedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    parkingSpace?: ParkingSpaceOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    razorpayOrderId?: string
    razorpayPaymentId?: string
    razorpayRefundId?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: IntFilter<"Booking"> | number
    parkingSpaceId?: IntFilter<"Booking"> | number
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    startTime?: StringFilter<"Booking"> | string
    durationHours?: IntFilter<"Booking"> | number
    totalPrice?: FloatFilter<"Booking"> | number
    startAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    endAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    amountPaise?: IntNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    refundStatus?: EnumRefundStatusNullableFilter<"Booking"> | $Enums.RefundStatus | null
    refundAmountPaise?: IntNullableFilter<"Booking"> | number | null
    refundProcessedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parkingSpace?: XOR<ParkingSpaceScalarRelationFilter, ParkingSpaceWhereInput>
  }, "id" | "razorpayOrderId" | "razorpayPaymentId" | "razorpayRefundId">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingSpaceId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    durationHours?: SortOrder
    totalPrice?: SortOrder
    startAt?: SortOrderInput | SortOrder
    endAt?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaise?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    razorpayRefundId?: SortOrderInput | SortOrder
    refundStatus?: SortOrderInput | SortOrder
    refundAmountPaise?: SortOrderInput | SortOrder
    refundProcessedAt?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    parkingSpaceId?: IntWithAggregatesFilter<"Booking"> | number
    bookingDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    startTime?: StringWithAggregatesFilter<"Booking"> | string
    durationHours?: IntWithAggregatesFilter<"Booking"> | number
    totalPrice?: FloatWithAggregatesFilter<"Booking"> | number
    startAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    endAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Booking"> | $Enums.PaymentStatus
    amountPaise?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    razorpayRefundId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    refundStatus?: EnumRefundStatusNullableWithAggregatesFilter<"Booking"> | $Enums.RefundStatus | null
    refundAmountPaise?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    refundProcessedAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    parkingSpaces?: ParkingSpaceCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    parkingSpaces?: ParkingSpaceUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpaces?: ParkingSpaceUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpaces?: ParkingSpaceUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSpaceCreateInput = {
    name: string
    address: string
    area: string
    pricePerHour: number
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: number | null
    longitude?: number | null
    contactPhone?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutParkingSpacesInput
    bookings?: BookingCreateNestedManyWithoutParkingSpaceInput
  }

  export type ParkingSpaceUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    area: string
    pricePerHour: number
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: number | null
    longitude?: number | null
    contactPhone?: string | null
    ownerId: number
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingSpaceInput
  }

  export type ParkingSpaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutParkingSpacesNestedInput
    bookings?: BookingUpdateManyWithoutParkingSpaceNestedInput
  }

  export type ParkingSpaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingSpaceNestedInput
  }

  export type ParkingSpaceCreateManyInput = {
    id?: number
    name: string
    address: string
    area: string
    pricePerHour: number
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: number | null
    longitude?: number | null
    contactPhone?: string | null
    ownerId: number
    createdAt?: Date | string
  }

  export type ParkingSpaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSpaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
    user: UserCreateNestedOneWithoutBookingsInput
    parkingSpace: ParkingSpaceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    userId: number
    parkingSpaceId: number
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
  }

  export type BookingUpdateInput = {
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    parkingSpace?: ParkingSpaceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parkingSpaceId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingCreateManyInput = {
    id?: number
    userId: number
    parkingSpaceId: number
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
  }

  export type BookingUpdateManyMutationInput = {
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parkingSpaceId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type ParkingSpaceListRelationFilter = {
    every?: ParkingSpaceWhereInput
    some?: ParkingSpaceWhereInput
    none?: ParkingSpaceWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParkingSpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParkingSpaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    pricePerHour?: SortOrder
    covered?: SortOrder
    evCharging?: SortOrder
    access24x7?: SortOrder
    available?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactPhone?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkingSpaceAvgOrderByAggregateInput = {
    id?: SortOrder
    pricePerHour?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
  }

  export type ParkingSpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    pricePerHour?: SortOrder
    covered?: SortOrder
    evCharging?: SortOrder
    access24x7?: SortOrder
    available?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactPhone?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkingSpaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    area?: SortOrder
    pricePerHour?: SortOrder
    covered?: SortOrder
    evCharging?: SortOrder
    access24x7?: SortOrder
    available?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactPhone?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkingSpaceSumOrderByAggregateInput = {
    id?: SortOrder
    pricePerHour?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
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

  export type EnumRefundStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRefundStatusNullableFilter<$PrismaModel> | $Enums.RefundStatus | null
  }

  export type ParkingSpaceScalarRelationFilter = {
    is?: ParkingSpaceWhereInput
    isNot?: ParkingSpaceWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingSpaceId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    durationHours?: SortOrder
    totalPrice?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaise?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    razorpayRefundId?: SortOrder
    refundStatus?: SortOrder
    refundAmountPaise?: SortOrder
    refundProcessedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingSpaceId?: SortOrder
    durationHours?: SortOrder
    totalPrice?: SortOrder
    amountPaise?: SortOrder
    refundAmountPaise?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingSpaceId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    durationHours?: SortOrder
    totalPrice?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaise?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    razorpayRefundId?: SortOrder
    refundStatus?: SortOrder
    refundAmountPaise?: SortOrder
    refundProcessedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingSpaceId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    durationHours?: SortOrder
    totalPrice?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaise?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    razorpayRefundId?: SortOrder
    refundStatus?: SortOrder
    refundAmountPaise?: SortOrder
    refundProcessedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingSpaceId?: SortOrder
    durationHours?: SortOrder
    totalPrice?: SortOrder
    amountPaise?: SortOrder
    refundAmountPaise?: SortOrder
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

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type EnumRefundStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRefundStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusNullableFilter<$PrismaModel>
  }

  export type ParkingSpaceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingSpaceCreateWithoutOwnerInput, ParkingSpaceUncheckedCreateWithoutOwnerInput> | ParkingSpaceCreateWithoutOwnerInput[] | ParkingSpaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutOwnerInput | ParkingSpaceCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingSpaceCreateManyOwnerInputEnvelope
    connect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingSpaceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingSpaceCreateWithoutOwnerInput, ParkingSpaceUncheckedCreateWithoutOwnerInput> | ParkingSpaceCreateWithoutOwnerInput[] | ParkingSpaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutOwnerInput | ParkingSpaceCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingSpaceCreateManyOwnerInputEnvelope
    connect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParkingSpaceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingSpaceCreateWithoutOwnerInput, ParkingSpaceUncheckedCreateWithoutOwnerInput> | ParkingSpaceCreateWithoutOwnerInput[] | ParkingSpaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutOwnerInput | ParkingSpaceCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingSpaceUpsertWithWhereUniqueWithoutOwnerInput | ParkingSpaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingSpaceCreateManyOwnerInputEnvelope
    set?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    disconnect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    delete?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    connect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    update?: ParkingSpaceUpdateWithWhereUniqueWithoutOwnerInput | ParkingSpaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingSpaceUpdateManyWithWhereWithoutOwnerInput | ParkingSpaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingSpaceScalarWhereInput | ParkingSpaceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingSpaceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingSpaceCreateWithoutOwnerInput, ParkingSpaceUncheckedCreateWithoutOwnerInput> | ParkingSpaceCreateWithoutOwnerInput[] | ParkingSpaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutOwnerInput | ParkingSpaceCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingSpaceUpsertWithWhereUniqueWithoutOwnerInput | ParkingSpaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingSpaceCreateManyOwnerInputEnvelope
    set?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    disconnect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    delete?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    connect?: ParkingSpaceWhereUniqueInput | ParkingSpaceWhereUniqueInput[]
    update?: ParkingSpaceUpdateWithWhereUniqueWithoutOwnerInput | ParkingSpaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingSpaceUpdateManyWithWhereWithoutOwnerInput | ParkingSpaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingSpaceScalarWhereInput | ParkingSpaceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParkingSpacesInput = {
    create?: XOR<UserCreateWithoutParkingSpacesInput, UserUncheckedCreateWithoutParkingSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingSpacesInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutParkingSpaceInput = {
    create?: XOR<BookingCreateWithoutParkingSpaceInput, BookingUncheckedCreateWithoutParkingSpaceInput> | BookingCreateWithoutParkingSpaceInput[] | BookingUncheckedCreateWithoutParkingSpaceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingSpaceInput | BookingCreateOrConnectWithoutParkingSpaceInput[]
    createMany?: BookingCreateManyParkingSpaceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutParkingSpaceInput = {
    create?: XOR<BookingCreateWithoutParkingSpaceInput, BookingUncheckedCreateWithoutParkingSpaceInput> | BookingCreateWithoutParkingSpaceInput[] | BookingUncheckedCreateWithoutParkingSpaceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingSpaceInput | BookingCreateOrConnectWithoutParkingSpaceInput[]
    createMany?: BookingCreateManyParkingSpaceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutParkingSpacesNestedInput = {
    create?: XOR<UserCreateWithoutParkingSpacesInput, UserUncheckedCreateWithoutParkingSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingSpacesInput
    upsert?: UserUpsertWithoutParkingSpacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingSpacesInput, UserUpdateWithoutParkingSpacesInput>, UserUncheckedUpdateWithoutParkingSpacesInput>
  }

  export type BookingUpdateManyWithoutParkingSpaceNestedInput = {
    create?: XOR<BookingCreateWithoutParkingSpaceInput, BookingUncheckedCreateWithoutParkingSpaceInput> | BookingCreateWithoutParkingSpaceInput[] | BookingUncheckedCreateWithoutParkingSpaceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingSpaceInput | BookingCreateOrConnectWithoutParkingSpaceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutParkingSpaceInput | BookingUpsertWithWhereUniqueWithoutParkingSpaceInput[]
    createMany?: BookingCreateManyParkingSpaceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutParkingSpaceInput | BookingUpdateWithWhereUniqueWithoutParkingSpaceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutParkingSpaceInput | BookingUpdateManyWithWhereWithoutParkingSpaceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutParkingSpaceNestedInput = {
    create?: XOR<BookingCreateWithoutParkingSpaceInput, BookingUncheckedCreateWithoutParkingSpaceInput> | BookingCreateWithoutParkingSpaceInput[] | BookingUncheckedCreateWithoutParkingSpaceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingSpaceInput | BookingCreateOrConnectWithoutParkingSpaceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutParkingSpaceInput | BookingUpsertWithWhereUniqueWithoutParkingSpaceInput[]
    createMany?: BookingCreateManyParkingSpaceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutParkingSpaceInput | BookingUpdateWithWhereUniqueWithoutParkingSpaceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutParkingSpaceInput | BookingUpdateManyWithWhereWithoutParkingSpaceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingSpaceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ParkingSpaceCreateWithoutBookingsInput, ParkingSpaceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutBookingsInput
    connect?: ParkingSpaceWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumRefundStatusFieldUpdateOperationsInput = {
    set?: $Enums.RefundStatus | null
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSpaceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ParkingSpaceCreateWithoutBookingsInput, ParkingSpaceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSpaceCreateOrConnectWithoutBookingsInput
    upsert?: ParkingSpaceUpsertWithoutBookingsInput
    connect?: ParkingSpaceWhereUniqueInput
    update?: XOR<XOR<ParkingSpaceUpdateToOneWithWhereWithoutBookingsInput, ParkingSpaceUpdateWithoutBookingsInput>, ParkingSpaceUncheckedUpdateWithoutBookingsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumRefundStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRefundStatusNullableFilter<$PrismaModel> | $Enums.RefundStatus | null
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

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type NestedEnumRefundStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRefundStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusNullableFilter<$PrismaModel>
  }

  export type ParkingSpaceCreateWithoutOwnerInput = {
    name: string
    address: string
    area: string
    pricePerHour: number
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: number | null
    longitude?: number | null
    contactPhone?: string | null
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutParkingSpaceInput
  }

  export type ParkingSpaceUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    address: string
    area: string
    pricePerHour: number
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: number | null
    longitude?: number | null
    contactPhone?: string | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingSpaceInput
  }

  export type ParkingSpaceCreateOrConnectWithoutOwnerInput = {
    where: ParkingSpaceWhereUniqueInput
    create: XOR<ParkingSpaceCreateWithoutOwnerInput, ParkingSpaceUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSpaceCreateManyOwnerInputEnvelope = {
    data: ParkingSpaceCreateManyOwnerInput | ParkingSpaceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
    parkingSpace: ParkingSpaceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    parkingSpaceId: number
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSpaceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ParkingSpaceWhereUniqueInput
    update: XOR<ParkingSpaceUpdateWithoutOwnerInput, ParkingSpaceUncheckedUpdateWithoutOwnerInput>
    create: XOR<ParkingSpaceCreateWithoutOwnerInput, ParkingSpaceUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSpaceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ParkingSpaceWhereUniqueInput
    data: XOR<ParkingSpaceUpdateWithoutOwnerInput, ParkingSpaceUncheckedUpdateWithoutOwnerInput>
  }

  export type ParkingSpaceUpdateManyWithWhereWithoutOwnerInput = {
    where: ParkingSpaceScalarWhereInput
    data: XOR<ParkingSpaceUpdateManyMutationInput, ParkingSpaceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ParkingSpaceScalarWhereInput = {
    AND?: ParkingSpaceScalarWhereInput | ParkingSpaceScalarWhereInput[]
    OR?: ParkingSpaceScalarWhereInput[]
    NOT?: ParkingSpaceScalarWhereInput | ParkingSpaceScalarWhereInput[]
    id?: IntFilter<"ParkingSpace"> | number
    name?: StringFilter<"ParkingSpace"> | string
    address?: StringFilter<"ParkingSpace"> | string
    area?: StringFilter<"ParkingSpace"> | string
    pricePerHour?: FloatFilter<"ParkingSpace"> | number
    covered?: BoolFilter<"ParkingSpace"> | boolean
    evCharging?: BoolFilter<"ParkingSpace"> | boolean
    access24x7?: BoolFilter<"ParkingSpace"> | boolean
    available?: BoolFilter<"ParkingSpace"> | boolean
    latitude?: FloatNullableFilter<"ParkingSpace"> | number | null
    longitude?: FloatNullableFilter<"ParkingSpace"> | number | null
    contactPhone?: StringNullableFilter<"ParkingSpace"> | string | null
    ownerId?: IntFilter<"ParkingSpace"> | number
    createdAt?: DateTimeFilter<"ParkingSpace"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    parkingSpaceId?: IntFilter<"Booking"> | number
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    startTime?: StringFilter<"Booking"> | string
    durationHours?: IntFilter<"Booking"> | number
    totalPrice?: FloatFilter<"Booking"> | number
    startAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    endAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    amountPaise?: IntNullableFilter<"Booking"> | number | null
    razorpayOrderId?: StringNullableFilter<"Booking"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    razorpayRefundId?: StringNullableFilter<"Booking"> | string | null
    refundStatus?: EnumRefundStatusNullableFilter<"Booking"> | $Enums.RefundStatus | null
    refundAmountPaise?: IntNullableFilter<"Booking"> | number | null
    refundProcessedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
  }

  export type UserCreateWithoutParkingSpacesInput = {
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParkingSpacesInput = {
    id?: number
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParkingSpacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingSpacesInput, UserUncheckedCreateWithoutParkingSpacesInput>
  }

  export type BookingCreateWithoutParkingSpaceInput = {
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutParkingSpaceInput = {
    id?: number
    userId: number
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
  }

  export type BookingCreateOrConnectWithoutParkingSpaceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutParkingSpaceInput, BookingUncheckedCreateWithoutParkingSpaceInput>
  }

  export type BookingCreateManyParkingSpaceInputEnvelope = {
    data: BookingCreateManyParkingSpaceInput | BookingCreateManyParkingSpaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParkingSpacesInput = {
    update: XOR<UserUpdateWithoutParkingSpacesInput, UserUncheckedUpdateWithoutParkingSpacesInput>
    create: XOR<UserCreateWithoutParkingSpacesInput, UserUncheckedCreateWithoutParkingSpacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingSpacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingSpacesInput, UserUncheckedUpdateWithoutParkingSpacesInput>
  }

  export type UserUpdateWithoutParkingSpacesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParkingSpacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutParkingSpaceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutParkingSpaceInput, BookingUncheckedUpdateWithoutParkingSpaceInput>
    create: XOR<BookingCreateWithoutParkingSpaceInput, BookingUncheckedCreateWithoutParkingSpaceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutParkingSpaceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutParkingSpaceInput, BookingUncheckedUpdateWithoutParkingSpaceInput>
  }

  export type BookingUpdateManyWithWhereWithoutParkingSpaceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutParkingSpaceInput>
  }

  export type UserCreateWithoutBookingsInput = {
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    parkingSpaces?: ParkingSpaceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    parkingSpaces?: ParkingSpaceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ParkingSpaceCreateWithoutBookingsInput = {
    name: string
    address: string
    area: string
    pricePerHour: number
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: number | null
    longitude?: number | null
    contactPhone?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutParkingSpacesInput
  }

  export type ParkingSpaceUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    address: string
    area: string
    pricePerHour: number
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: number | null
    longitude?: number | null
    contactPhone?: string | null
    ownerId: number
    createdAt?: Date | string
  }

  export type ParkingSpaceCreateOrConnectWithoutBookingsInput = {
    where: ParkingSpaceWhereUniqueInput
    create: XOR<ParkingSpaceCreateWithoutBookingsInput, ParkingSpaceUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpaces?: ParkingSpaceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpaces?: ParkingSpaceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ParkingSpaceUpsertWithoutBookingsInput = {
    update: XOR<ParkingSpaceUpdateWithoutBookingsInput, ParkingSpaceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ParkingSpaceCreateWithoutBookingsInput, ParkingSpaceUncheckedCreateWithoutBookingsInput>
    where?: ParkingSpaceWhereInput
  }

  export type ParkingSpaceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ParkingSpaceWhereInput
    data: XOR<ParkingSpaceUpdateWithoutBookingsInput, ParkingSpaceUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSpaceUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutParkingSpacesNestedInput
  }

  export type ParkingSpaceUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSpaceCreateManyOwnerInput = {
    id?: number
    name: string
    address: string
    area: string
    pricePerHour: number
    covered?: boolean
    evCharging?: boolean
    access24x7?: boolean
    available?: boolean
    latitude?: number | null
    longitude?: number | null
    contactPhone?: string | null
    createdAt?: Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: number
    parkingSpaceId: number
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
  }

  export type ParkingSpaceUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutParkingSpaceNestedInput
  }

  export type ParkingSpaceUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingSpaceNestedInput
  }

  export type ParkingSpaceUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    covered?: BoolFieldUpdateOperationsInput | boolean
    evCharging?: BoolFieldUpdateOperationsInput | boolean
    access24x7?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parkingSpace?: ParkingSpaceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    parkingSpaceId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    parkingSpaceId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingCreateManyParkingSpaceInput = {
    id?: number
    userId: number
    bookingDate: Date | string
    startTime: string
    durationHours: number
    totalPrice: number
    startAt?: Date | string | null
    endAt?: Date | string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaise?: number | null
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    razorpayRefundId?: string | null
    refundStatus?: $Enums.RefundStatus | null
    refundAmountPaise?: number | null
    refundProcessedAt?: Date | string | null
  }

  export type BookingUpdateWithoutParkingSpaceInput = {
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutParkingSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUncheckedUpdateManyWithoutParkingSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    durationHours?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    refundStatus?: NullableEnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus | null
    refundAmountPaise?: NullableIntFieldUpdateOperationsInput | number | null
    refundProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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