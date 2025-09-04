import { CardGrey } from "./CardGrey";
import { CardRed } from "./CardRed";
import { CardWhite } from "./CardWhite";

export function SectionGrid() {
  return (
    <>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CardRed/>
        <CardGrey/>
        <CardWhite/>
      </section>
    </>
  )
}