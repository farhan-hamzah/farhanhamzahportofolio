import { profile } from "@/data/profile";

export function AboutPhoto() {
  const [candidTopLeft, candidBottomRight] = profile.photo.candid;

  return (
    <div className="relative mx-auto w-full max-w-xs pb-6 pt-2 sm:max-w-sm">
      <div
        aria-hidden
        className="photo-halo absolute -inset-8 rounded-[48px] opacity-70 blur-2xl"
      />

      {/* Foto utama */}
      <div className="relative z-10 overflow-hidden rounded-[32px] border border-line/60 shadow-[0_20px_60px_rgba(31,75,63,0.12)]">
        <img
          src={profile.photo.primary}
          alt={`Foto formal ${profile.name}`}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      {/* Foto candid — pojok kiri atas, sedikit dimiringkan seperti polaroid */}
      {candidTopLeft && (
        <div className="absolute -left-3 -top-3 z-20 w-16 rotate-[-8deg] rounded-xl border border-line/60 bg-pill p-1 shadow-[0_10px_20px_rgba(31,75,63,0.16)] transition-transform duration-300 hover:rotate-0 sm:-left-6 sm:-top-6 sm:w-28 sm:rounded-2xl sm:p-1.5 sm:shadow-[0_14px_30px_rgba(31,75,63,0.16)]">
          <img
            src={candidTopLeft}
            alt={`Momen candid ${profile.name}`}
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      )}

      {/* Foto candid — pojok kanan bawah, dimiringkan arah berlawanan */}
      {candidBottomRight && (
        <div className="absolute -bottom-1 -right-3 z-20 w-16 rotate-[6deg] rounded-xl border border-line/60 bg-pill p-1 shadow-[0_10px_20px_rgba(31,75,63,0.16)] transition-transform duration-300 hover:rotate-0 sm:-bottom-2 sm:-right-6 sm:w-28 sm:rounded-2xl sm:p-1.5 sm:shadow-[0_14px_30px_rgba(31,75,63,0.16)]">
          <img
            src={candidBottomRight}
            alt={`Momen candid ${profile.name}`}
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      )}

      {/* Badge lokasi — pojok kanan atas, area kosong yang gak dipakai foto candid */}
      <div className="absolute -right-1 -top-1 z-20 whitespace-nowrap rounded-full border border-line/70 bg-pill/90 px-2.5 py-1 text-[10px] font-medium text-fg shadow-[0_10px_30px_rgba(31,75,63,0.1)] backdrop-blur sm:-right-2 sm:-top-2 sm:px-3 sm:py-1.5 sm:text-xs">
        📍 {profile.location}
      </div>
    </div>
  );
}