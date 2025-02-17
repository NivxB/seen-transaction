import { pipe } from "fp-ts/lib/function";
import { extract } from "fp-ts/lib/Identity";
import * as D from "io-ts/lib/Decoder";
import * as E from "fp-ts/lib/Either";

export const decodeType = <T>(decoder: D.Decoder<unknown, T>, value: unknown): T =>
  pipe(
    decoder.decode(value),
    E.fold((error) => {
      throw new Error(D.draw(error));
    }, extract)
  );

export const decodeArrayOfType = <T>(decoder: D.Decoder<unknown, T>, value: unknown): T[] => {
  const arrayDecoder = D.array(decoder);
  return decodeType(arrayDecoder, value);
};
