import { useState } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import Button from '../Button';
import Input from '../Input';

const accountTypes = [
  { id: 'user', name: 'Անձնական' },
  { id: 'shop', name: 'Ընկերություն' },
];

export default function RegistrationForm() {
  const [selected, setSelected] = useState(accountTypes[0]);

  return (
    <div className="min-h-screen">
      <div className="w-96 p-6 rounded-2xl bg-light-bg dark:bg-dark-bg shadow-lg shadow-light-shadow dark:shadow-dark-shadow m-auto">
        <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
          Ստեղծել Հաշիվ
        </h2>

        <div className="p-[14px] border mb-3 bg-light-btn dark:bg-dark-btn rounded-xl text-white">
          <Listbox value={selected} onChange={setSelected}>
            <ListboxButton>{selected.name}</ListboxButton>
            <ListboxOptions anchor="bottom">
              {accountTypes.map((accountType) => (
                <ListboxOption
                  key={accountType.id}
                  value={accountType}
                  className="cursor-pointer text-light-link dark:text-dark-link bg-light-text-tertiary dark:bg-dark-text-tertiary p-3"
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

        <Button
          variant="filled"
          color="primary"
          size="lg"
          className="mt-6 w-full p-3 rounded-xl transition"
        >
          Գրանցվել
        </Button>
      </div>
    </div>
  );
}
