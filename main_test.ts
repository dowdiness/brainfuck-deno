import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { compile } from "./main.ts";

Deno.test(function compileTest() {
  const abc =
    "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+.+.";

  assertEquals(compile(abc), "abc");
  const cba =
    "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.-.-.";

  assertEquals(compile(cba), "cba");

  const hello =
    ">+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++.[-]>++++++++[<++++>-]<.>+++++++++++[<++++++++>-]<-.--------.+++.------.--------.[-]>++++++++[<++++>-]<+.";
  assertEquals(compile(hello), "Hello world!");
});
