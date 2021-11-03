import {
  GraphQLBigInt,
  GraphQLByte,
  GraphQLCurrency,
  GraphQLDate,
  GraphQLDateTime,
  GraphQLDID,
  GraphQLEmailAddress,
  GraphQLGUID,
  GraphQLHexadecimal,
  GraphQLHexColorCode,
  GraphQLHSL,
  GraphQLHSLA,
  GraphQLIBAN,
  GraphQLIPv4,
  GraphQLIPv6,
  GraphQLISBN,
  GraphQLISO8601Duration,
  GraphQLJSON,
  GraphQLJSONObject,
  GraphQLJWT,
  GraphQLLatitude,
  GraphQLLocalDate,
  GraphQLLocalEndTime,
  GraphQLLocalTime,
  GraphQLLong,
  GraphQLLongitude,
  GraphQLMAC,
  GraphQLNegativeFloat,
  GraphQLNegativeInt,
  GraphQLNonEmptyString,
  GraphQLNonNegativeFloat,
  GraphQLNonNegativeInt,
  GraphQLNonPositiveFloat,
  GraphQLNonPositiveInt,
  GraphQLObjectID,
  GraphQLPhoneNumber,
  GraphQLPort,
  GraphQLPositiveFloat,
  GraphQLPositiveInt,
  GraphQLPostalCode,
  GraphQLRGB,
  GraphQLRGBA,
  GraphQLSafeInt,
  GraphQLTime,
  GraphQLTimestamp,
  GraphQLUnsignedFloat,
  GraphQLUnsignedInt,
  GraphQLURL,
  GraphQLUSCurrency,
  GraphQLUtcOffset,
  GraphQLUUID,
  GraphQLVoid,
} from 'graphql-scalars';
import { GraphQLSchema } from 'graphql';

// Used for codegen

export default new GraphQLSchema({
  types: [
    GraphQLDate,
    GraphQLTime,
    GraphQLDateTime,
    GraphQLTimestamp,
    GraphQLUtcOffset,
    GraphQLISO8601Duration,
    GraphQLLocalDate,
    GraphQLLocalTime,
    GraphQLLocalEndTime,
    GraphQLEmailAddress,
    GraphQLNegativeFloat,
    GraphQLNegativeInt,
    GraphQLNonEmptyString,
    GraphQLNonNegativeFloat,
    GraphQLNonNegativeInt,
    GraphQLNonPositiveFloat,
    GraphQLNonPositiveInt,
    GraphQLPhoneNumber,
    GraphQLPositiveFloat,
    GraphQLPositiveInt,
    GraphQLPostalCode,
    GraphQLUnsignedFloat,
    GraphQLUnsignedInt,
    GraphQLURL,
    GraphQLBigInt,
    GraphQLByte,
    GraphQLLong,
    GraphQLSafeInt,
    GraphQLUUID,
    GraphQLGUID,
    GraphQLHexadecimal,
    GraphQLHexColorCode,
    GraphQLHSL,
    GraphQLHSLA,
    GraphQLIPv4,
    GraphQLIPv6,
    GraphQLISBN,
    GraphQLJWT,
    GraphQLLatitude,
    GraphQLLongitude,
    GraphQLMAC,
    GraphQLPort,
    GraphQLRGB,
    GraphQLRGBA,
    GraphQLUSCurrency,
    GraphQLCurrency,
    GraphQLJSON,
    GraphQLJSONObject,
    GraphQLIBAN,
    GraphQLObjectID,
    GraphQLVoid,
    GraphQLDID,
  ],
});
