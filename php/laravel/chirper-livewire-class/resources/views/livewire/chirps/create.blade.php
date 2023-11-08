<?php

use Livewire\Attributes\Rule;
use Livewire\Volt\Component;

new class extends Component {
    #[Rule('required|string|max:255')]
    public string $message = '';

    public function store(): void
    {
        $validated = $this->validate();

        auth()
            ->user()
            ->chirps()
            ->create($validated);

        $this->message = '';

        $this->dispatch('chirp-created');
    }
}; ?>

<div>
    {{-- <form wire:submit="store">
        <textarea wire:model="message" placeholder="{{ __('What\'s on your mind?') }}"
            class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>

        <x-input-error :messages="$errors->get('message')" class="mt-2" />
        <x-primary-button class="mt-4">{{ __('Chirp') }}</x-primary-button>
    </form> --}}

    <div>
        @auth
            <x-primary-button x-data=""
                x-on:click.prevent="$dispatch('open-modal', 'post-creation')">{{ __('Create Post') }}</x-primary-button>
        @endauth
        <x-modal name="post-creation" focusable>
            <form wire:submit="store" class="p-6">

                <h2 class="text-lg font-medium text-gray-90">
                    {{ __('Create your post') }}
                </h2>

                <div class="mt-4">
                    <textarea wire:model="message" placeholder="{{ __('What\'s on your mind?') }}"
                        class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>

                    <x-input-error :messages="$errors->get('message')" class="mt-2" />
                </div>

                <div class="mt-4 flex justify-between">
                    <x-secondary-button x-on:click="$dispatch('close')">
                        {{ __('Cancel') }}
                    </x-secondary-button>

                    <x-primary-button class="ml-3">
                        {{ __('Create') }}
                    </x-primary-button>
                </div>
            </form>
        </x-modal>
    </div>
</div>
