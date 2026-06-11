<script setup lang="ts">
import { computed } from 'vue'
import CbButton from '@components/CbButton.vue'
import AppLayout from '@components/layout/AppLayout.vue'
import CbButton  from '@components/CbButton.vue'
import { useForm, usePage } from '@inertiajs/vue3'

const page = usePage()
const success = computed(() => page.props.flash?.success as string | undefined)

const form = useForm({
    name:             '',
    company:          '',
    email:            '',
    phone:            '',
    inquiry_type:     'General Inquiry',
    product_interest: '',
    message:          '',
})

function submit() {
    form.post('/contact', { preserveScroll: true })
}


const inquiryTypes = [
    'General Inquiry',
    'Request a Sample',
    'Technical Specifications',
    'Partnership',
    'Custom Order',
    'Other',
]
</script>

<template>
    <AppLayout>
        <div class="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                <!-- ── LEFT ── -->
                <div  class="flex flex-col gap-10">

                    <!-- Heading -->
                    <div data-reveal>
                        <p class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-5">
                            Contact
                        </p>
                        <h1 class="font-display text-4xl lg:text-5xl text-neutral-800 leading-tight mb-6">
                            Let's Start a<br>
                            <span class="italic text-brand-dusty-rose">Conversation</span>
                        </h1>
                        <p class="font-sans text-base text-neutral-500 leading-relaxed max-w-sm">
                            Whether you need technical specifications, samples, or want to explore
                            a long-term partnership — our team is ready to help.
                        </p>
                    </div>

                    <!-- Info items -->
                    <div data-reveal class="flex flex-col gap-7">

                        <div class="flex items-start gap-4">
                            <svg class="w-5 h-5 text-brand-dusty-rose/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"/>
                            </svg>
                            <div>
                                <p class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Location</p>
                                <p class="font-sans text-sm font-medium text-neutral-800">United States</p>
                                <p class="font-sans text-sm text-neutral-500">Global manufacturing network</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <svg class="w-5 h-5 text-brand-dusty-rose/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                            </svg>
                            <div>
                                <p class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Email</p>
                                <a href="mailto:info@clevisbend.com" class="font-sans text-sm font-medium text-neutral-800 hover:text-brand-dusty-rose transition-colors">
                                    info@clevisbend.com
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <svg class="w-5 h-5 text-brand-dusty-rose/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75z"/>
                            </svg>
                            <div>
                                <p class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Response Time</p>
                                <p class="font-sans text-sm font-medium text-neutral-800">Within 24 business hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ── RIGHT: Form ── -->
                <div >
                    <!-- Success message -->
                    <div v-if="success" class="mb-8 border border-brand-dusty-rose/30 bg-brand-champagne/50 px-6 py-4">
                        <p class="font-sans text-sm text-brand-dusty-rose">{{ success }}</p>
                    </div>

                    <form data-reveal @submit.prevent="submit" class="flex flex-col gap-6" novalidate>

                        <!-- Row 1: Name + Company -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="flex flex-col gap-2">
                                <label class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                                    Name <span class="text-brand-dusty-rose">*</span>
                                </label>
                                <input
                                    v-model="form.name"
                                    type="text"
                                    placeholder="Your name"
                                    class="w-full border border-brand-champagne bg-transparent px-4 py-3 font-sans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-dusty-rose transition-colors"
                                    :class="{ 'border-red-300': form.errors.name }"
                                />
                                <p v-if="form.errors.name" class="font-sans text-xs text-red-400">{{ form.errors.name }}</p>
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Company</label>
                                <input
                                    v-model="form.company"
                                    type="text"
                                    placeholder="Company name"
                                    class="w-full border border-brand-champagne bg-transparent px-4 py-3 font-sans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-dusty-rose transition-colors"
                                />
                            </div>
                        </div>

                        <!-- Row 2: Email + Phone -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="flex flex-col gap-2">
                                <label class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                                    Email <span class="text-brand-dusty-rose">*</span>
                                </label>
                                <input
                                    v-model="form.email"
                                    type="email"
                                    placeholder="email@company.com"
                                    class="w-full border border-brand-champagne bg-transparent px-4 py-3 font-sans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-dusty-rose transition-colors"
                                    :class="{ 'border-red-300': form.errors.email }"
                                />
                                <p v-if="form.errors.email" class="font-sans text-xs text-red-400">{{ form.errors.email }}</p>
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Phone</label>
                                <input
                                    v-model="form.phone"
                                    type="tel"
                                    placeholder="+1 (000) 000-0000"
                                    class="w-full border border-brand-champagne bg-transparent px-4 py-3 font-sans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-dusty-rose transition-colors"
                                />
                            </div>
                        </div>

                        <!-- Row 3: Inquiry Type + Product Interest -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="flex flex-col gap-2">
                                <label class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                                    Inquiry Type <span class="text-brand-dusty-rose">*</span>
                                </label>
                                <div class="relative">
                                    <select
                                        v-model="form.inquiry_type"
                                        class="w-full appearance-none border border-brand-champagne bg-brand-ivory px-4 py-3 font-sans text-sm text-neutral-800 focus:outline-none focus:border-brand-dusty-rose transition-colors cursor-pointer"
                                    >
                                        <option v-for="type in inquiryTypes" :key="type" :value="type">{{ type }}</option>
                                    </select>
                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Product Interest</label>
                                <input
                                    v-model="form.product_interest"
                                    type="text"
                                    placeholder="e.g. Snap Tape, Hook & Eye"
                                    class="w-full border border-brand-champagne bg-transparent px-4 py-3 font-sans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-dusty-rose transition-colors"
                                />
                            </div>
                        </div>

                        <!-- Message -->
                        <div class="flex flex-col gap-2">
                            <label class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                                Message <span class="text-brand-dusty-rose">*</span>
                            </label>
                            <textarea
                                v-model="form.message"
                                rows="5"
                                placeholder="Tell us about your requirements..."
                                class="w-full border border-brand-champagne bg-transparent px-4 py-3 font-sans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-dusty-rose transition-colors resize-none"
                                :class="{ 'border-red-300': form.errors.message }"
                            />
                            <p v-if="form.errors.message" class="font-sans text-xs text-red-400">{{ form.errors.message }}</p>
                        </div>

                        <!-- Submit -->
                        <div>
                            <CbButton type="submit" variant="solid" :disabled="form.processing">
                                <span>{{ form.processing ? 'Sending…' : 'Send Inquiry' }}</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12zm0 0h7.5"/>
                                </svg>
                            </CbButton>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
