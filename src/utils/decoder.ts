import { pipe } from "fp-ts/lib/function";
import { extract } from "fp-ts/lib/Identity";
import * as D from "io-ts/lib/Decoder";
import * as E from "fp-ts/lib/Either";

/**
 * Decodes a value using the provided decoder.
 * If the decoding is successful, returns the decoded value.
 * If the decoding fails, throws an error with the decoder's error message.
 *
 * @param {D.Decoder<unknown, T>} decoder - The decoder used to decode the value.
 * @param {unknown} value - The value to decode.
 * @returns {T} - The decoded value of type T.
 * @throws {Error} - Throws an error if decoding fails.
 */
export const decodeType = <T>(decoder: D.Decoder<unknown, T>, value: unknown): T =>
  pipe(
    decoder.decode(value),
    E.fold((error) => {
      throw new Error(D.draw(error));
    }, extract)
  );

/**
 * Decodes an array of values using the provided decoder.
 * If the decoding is successful, returns the array of decoded values.
 * If the decoding fails, throws an error with the decoder's error message.
 *
 * @param {D.Decoder<unknown, T>} decoder - The decoder used to decode each value in the array.
 * @param {unknown} value - The value (should be an array) to decode.
 * @returns {T[]} - An array of decoded values of type T.
 * @throws {Error} - Throws an error if decoding fails.
 */
export const decodeArrayOfType = <T>(decoder: D.Decoder<unknown, T>, value: unknown): T[] => {
  const arrayDecoder = D.array(decoder);
  return decodeType(arrayDecoder, value);
};
