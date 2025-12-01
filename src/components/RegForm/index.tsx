import { useState } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

const accountTypes = [
  { id: 'user', name: 'Անձնական' },
  { id: 'shop', name: 'Ընկերություն' },
];

export default function RegistrationForm() {
  const [selected, setSelected] = useState(accountTypes[0]);

  return (
    <div className="w-96 p-6 rounded-2xl border-gray-200 bg-white shadow-2xl m-auto">
      <h2 className="text-2xl font-semibold mb-4">Ստեղծել Հաշիվ</h2>

      <div className="p-3 border mb-3 bg-cyan-600 rounded-xl text-white">
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton className="border-cyan-600">
            {selected.name}
          </ListboxButton>
          <ListboxOptions anchor="bottom" className="border-cyan-600">
            {accountTypes.map((accountType) => (
              <ListboxOption
                key={accountType.id}
                value={accountType}
                className="cursor-pointer border-cyan-600 text-cyan-600 bg-white p-3"
              >
                {accountType.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>

      {selected.id === 'user' && (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Անուն"
            className="p-3 border rounded-xl"
          />
          <input
            type="text"
            placeholder="Ազգանուն"
            className="p-3 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-xl"
          />
          <input
            type="text"
            placeholder="Գաղտնաբառ"
            className="p-3 border rounded-xl"
          />
          <input
            type="text"
            placeholder="Գաղտնաբառի կրկնություն"
            className="p-3 border rounded-xl"
          />
        </div>
      )}

      {selected.id === 'shop' && (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Ընկերության Անուն"
            className="p-3 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Ընկերության Email"
            className="p-3 border rounded-xl"
          />
          <input
            type="text"
            placeholder="Գաղտնաբառ"
            className="p-3 border rounded-xl"
          />
          <input
            type="text"
            placeholder="Գաղտնաբառի կրկնություն"
            className="p-3 border rounded-xl"
          />
        </div>
      )}

      <button className="mt-6 w-full p-3 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700 transition">
        Գրանցվել
      </button>
    </div>
  );
}
