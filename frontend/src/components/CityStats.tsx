import { useEffect, useState } from "react";
import { topCitiesQuery } from "../services/supabase/client";

interface City {
  childcare_nums: number | null;
  city_name: string | null;
}

function TableRow({ city, rank }: { city: City; rank: number }) {
  return (
    <tr className="border-b border-gray-200 bg-white">
      <td scope="row" className="px-6 py-4 text-gray-800">
        {rank + 1}
      </td>
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
      >
        {city.city_name}
      </th>
      <td className="px-6 py-4">{city.childcare_nums}</td>
    </tr>
  );
}

function CityStats() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    getCities();
  }, []);

  async function getCities() {
    try {
      const { data, error } = await topCitiesQuery;
      if (error) throw error;
      setCities(data); // No error because the type matches

      console.log(data);
    } catch (err) {
      console.error("Failed to fetch cities:", err);
    }
  }

  return (
    <table className="max-w-lg text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-xs uppercase text-gray-700">
        <tr>
          <th scope="col" className="px-6 py-3"></th>
          <th scope="col" className="px-6 py-3">
            City Name
          </th>
          <th scope="col" className="px-6 py-3">
            Childcare Nums
          </th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, rank) => (
          <TableRow key={rank} city={city} rank={rank} />
        ))}
      </tbody>
    </table>
  );
}

export default CityStats;
